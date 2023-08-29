import { createRouter, createWebHashHistory } from "vue-router";
import AppHome from "@/pages/Home.vue";
import AppBanner from "@/pages/Banner.vue";
import AppComment from "@/pages/Comment.vue";
import AppPost from "@/pages/Post.vue";
import AppUser from "@/pages/User.vue";
import AppSCTool from "@/pages/SCTool.vue";
import AppContractManage from "@/pages/ContractManage.vue";

const routes = [{
    path: "/", component: AppHome, name: "home"
},{
    path: "/banner", component: AppBanner, name: "banner"
},{
    path: "/commnet", component: AppComment, name: "comment"
},{
    path: "/post", component: AppPost, name: "post"
},{
    path: "/user", component: AppUser, name: "user"
},{
    path: "/scTool", component: AppSCTool, name: "scTool"
},{
    path: "/contractManage", component: AppContractManage, name: "contractManage"
}]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
});

export default router;



