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

      <el-input placeholder="请输入用户名(英文)" style="width:250px;" v-model="username" clearable></el-input>
      <el-input placeholder="请输入密码" style="width:250px;" v-model="password" clearable></el-input>

      <el-button @click="addUser" type="success">新建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        // {
        //   date: "2016-05-02",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄"
        // },
        // {
        //   date: "2016-05-04",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1517 弄"
        // },
        // {
        //   date: "2016-05-01",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1519 弄"
        // },
        // {
        //   date: "2016-05-03",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1516 弄"
        // }
      ],
      options: [
        {
          value: "0",
          label: "管理员"
        },
        {
          value: "1",
          label: "业务经理"
        },
        {
          value: "2",
          label: "风险经理"
        }
      ],
      value: "",
      username: "",
      password: "",
      currentRow: null
    };
  },
  created() {
    this.$ajax({
      method: "get",
      url: "/user/list"
    }).then(res => {
      console.log(res)
      // this.listLoading = false;
      this.tableData = res.data.list;
    });
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    addUser() {
      console.log("新建");
      // window.location.reload()
    }
  }
};
</script>