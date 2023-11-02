
<template>
  <div>
    <h2 class="table-title">工具数据分析</h2>
    <el-table :data="tableData" border stripe row-style="rowStyleMethod">
      <el-table-column prop="name" label="工具名称" width="150" align="left">
      </el-table-column>
      <el-table-column prop="language" label="合约语言" width="120" align="left">
      </el-table-column>
      <el-table-column prop="bug" label="检测漏洞" width="120" align="left">
      </el-table-column>
      <el-table-column prop="intro" label="详情介绍" width="400" align="left">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "Mythril",
          language: "solidity",
          bug: "整数溢出、时间戳依赖、重入攻击等",
          intro:
            "Mythril是以太坊EVM字节码的安全分析工具。它使用符号执行、SMT方案来分析检测智能合约代码中的各种安全漏洞",
        },
        {
          name: "Oyente",
          language: "solidity",
          bug: "交易顺序依赖漏洞、时间戳依赖、异常障碍、重入漏洞",
          intro:
            "Oyente是一个智能合约自动审计工具，使用了一种基于符号执行的技术来检测合约中的漏洞",
        },
        {
          name: "Conkas",
          language: "solidity",
          bug: "*************",
          intro: "一种以太坊字节码的模块化和静态分析工具",
        },
        {
          name: "Slither",
          language: "solidity",
          bug: "*************",
          intro: "*************",
        },
        {
          name: "Solhint",
          language: "solidity",
          bug: "*************",
          intro: "*************",
        },
        {
          name: "confuzzius",
          language: "solidity",
          bug: "*************",
          intro: "*************",
        },
        {
          name: "security",
          language: "solidity",
          bug: "*************",
          intro: "*************",
        },
        {
          name: "osiris",
          language: "solidity",
          bug: "*************",
          intro: "*************",
        },
        {
          name: "honeybadger",
          language: "solidity",
          bug: "*************",
          intro: "*************",
        },
        {
          name: "wana_cpp",
          language: "C++",
          bug: "*************",
          intro: "*************",
        },
        {
          name: "wana_rust",
          language: "Rust",
          bug: "*************",
          intro: "*************",
        },
        {
          name: "evulhunter",
          language: "Rust",
          bug: "*************",
          intro: "*************",
        },
      ],
    };
  },
};
</script>

<style scoped>
.table-title {
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  text-align: center;
}

.el-table .el-table__row:first-child {
  background-color: #f0dbdb;  /* Adjust color as needed */
}
</style>
