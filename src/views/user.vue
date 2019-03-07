<template>
  <div class="app-container">
    <el-table ref="filterTable" :data="tableData" border style="width: 100%">
      <el-table-column align="center" prop="id" label="序号" width="100"></el-table-column>
      <el-table-column align="center" prop="contractType" label="权限" width="150"></el-table-column>
      <el-table-column align="center" prop="contractNumber" label="用户名" width="150"></el-table-column>
      <el-table-column align="center" prop="partyA" label="密码" width="150"></el-table-column>
      <el-table-column align="center" label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 50px;">
      <p>添加新的用户</p>
      <el-select v-model="value" placeholder="请选择用户权限">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

      <el-input placeholder="请输入内容" style="width:250px;" v-model="input10" clearable></el-input>
      <el-input placeholder="请输入内容" style="width:250px;" v-model="input10" clearable></el-input>

      <el-button @click="addUser" type="success">新建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      input10: "",
      currentRow: null
    };
  },

  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    addUser() {
      console.log('新建')
      // window.location.reload()
    }
  }
};
</script>