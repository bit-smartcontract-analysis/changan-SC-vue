import axios from "axios"
import auth from "./auth"
import qs from "qs";

// const SERVER_HOST = "http://127.0.0.1:5000"

// const SERVER_HOST = window.location.origin

// const SERVER_HOST = process.env.VUE_APP_SERVER_HOST

//配置文件
//.env
//.env.[mode]

//mode: development、test、production

//npm run serve: 用的是development模式
//npm run build: 默认用的是production模式
//npm run build -- --mode [模式，如：development]指定具体的模式

//不同的模式，会读取对应模式下的配置参数
//development模式: .env.development配置文件
//production模式: .env.production配置文件

//在配置文件中，只有能三种类型的配置项：NODE_ENV，BASE_URL 和以 VUE_APP_ 开头的变量将通过 webpack.DefinePlugin 静态地嵌入到客户端侧的代码中

//配置项中，只能是字符串，不能填入一些js代码，比如window.location.origin


class Http {
	constructor() {
		if(process.env.NODE_ENV == 'production'){
			this.server_host = window.location.origin;
		}else{
			this.server_host = "http://127.0.0.1:5000"
		} 
		this.http = axios.create({
			baseURL: this.server_host,
			timeout: 1000*60
		});

		// 请求之前的拦截器，用来设置JWT
		this.http.interceptors.request.use(config => {
			const token = auth.token
			if (token) {
				config.headers.Authorization = "Bearer " + token
			}
			return config
		})

		// 响应拦截
		this.http.interceptors.response.use(response => {
			return response.data
		})
	}

	_post(url, data){
		return this.http.post(url, qs.stringify(data));
	}

	addBanner(data){
		const url = "/cmsapi/banner/add";
		return this._post(url, data)
	}

	getBannerList(){
		const url = "/cmsapi/banner/list";
		return this.http.get(url);
	}

	deleteBanner(banner_id){
		const url = "/cmsapi/banner/delete";
		return this._post(url, {"id": banner_id})
	}

	editBanner(data){
		const url = "/cmsapi/banner/edit";
		return this._post(url, data)
	}

	getPostList(page){
		const url = "/cmsapi/post/list?page=" + (page?page:1)
		return this.http.get(url);
	}

	deletePost(post_id){
		const url = "/cmsapi/post/delete"
		return this._post(url, {"id": post_id})
	}

	getCommentList(){
		const url = "/cmsapi/comment/list"
		return this.http.get(url)
	}

	deleteComment(commnet_id){
		const url = "/cmsapi/comment/delete"
		return this._post(url, {"id": commnet_id})
	}

	getUserList(page){
		const url = "/cmsapi/user/list?page=" + page
		return this.http.get(url)
	}

	activeUser(user_id, is_active){
		const url = "/cmsapi/user/active"
		return this._post(url, {"id": user_id, "is_active": is_active})
	}

	getBoardPostCount(){
		const url = "/cmsapi/board/post/count"
		return this.http.get(url)
	}

	getDay7PostCount(){
		const url = "/cmsapi/day7/post/count"
		return this.http.get(url)
	}

}

export default new Http()