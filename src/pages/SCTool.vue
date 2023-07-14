<template>
  <div>
    <el-space direction="vertical" :size="20" style="width: 100%">
      <h1>安全工具检测</h1>
      <h4>1. 上传合约</h4>
      <el-input v-model="contract_url" autocomplete="off" style="margin-right:10px;"></el-input>
      <el-upload
        :file-list="fileList"
        class="upload-demo"
        :action="$http.server_host + '/scAnalysis/contracts/file/upload'"
        :headers="{ Authorization: 'Bearer ' + $auth.token }"
        multiple
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :limit="3"
        :on-exceed="handleExceed"
        :on-success="handleSuccess"
        :on-error="handleError"
      >
        <el-button type="primary">Click to upload</el-button>
      
        <template #tip>
          <div class="el-upload__tip">
            contract files with a size less than 500KB.
          </div>
        </template>
      </el-upload>
      <div class="file-list-container">
        <div class="file" v-for="file in paginatedFiles" :key="file.name">
          {{ file.name }}
        </div>
      </div>

      <el-pagination
        :page-size="5"
        layout="prev, pager, next"
        :total="fileList.length"
        @current-change="handlePageChange"
      ></el-pagination>
    </el-space>
    <h4>2. 选择合约所用语言</h4>
    <h4>3. 选择漏洞检测的工具</h4>
    <h4>4. 预计检测所需的时间</h4>
    <h4>5. 输入超时时间</h4>
    <h4>6. 漏洞检测结果</h4>
  </div>
</template>
  
<script>
import { ElMessage, ElMessageBox } from "element-plus";

export default {
  name: "AppSCTool",
  data() {
    return {
      fileList: [],
      currentPage: 1,
      uploadError: '',
      contract_url: ""
    };
  },
  computed: {
    paginatedFiles() {
      const start = (this.currentPage - 1) * 5;
      const end = this.currentPage * 5;
      return this.fileList.slice(start, end);
    },
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },

    handlePreview(uploadFile) {
      console.log(uploadFile);
    },

    handleExceed(files) {
      ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length} totally`
      );
    },

    beforeRemove(uploadFile) {
      return ElMessageBox.confirm(
        `Cancel the transfer of ${uploadFile.name} ?`
      ).then(
        () => true,
        () => false
      );
    },
    handleSuccess(response, file) {
      if (response["code"] == 200) {
        var file_name = response["data"]["contract_url"];
        this.contract_url = "/media/contracts/" + file_name;
        console.log(file_name);
        console.log(this.contract_url);
        this.fileList.push({ name: file.name });
      } else {
        // Don't add to fileList
        ElMessage.error(response["message"]);
      }
    },
    handleError(err) {
      ElMessage.error(err.message);
    },
    handlePageChange(newPage) {
      this.currentPage = newPage;
    },
  },
};
</script>
  
<style scoped>
.el-space {
  display: block;
}

.file-list-container {
  width: 300px;
  height: auto;
  overflow: auto;
}
</style>
