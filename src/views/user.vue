<template>
  <div class="app-container">
    <el-table ref="filterTable" :data="tableData" border style="width: 100%">
      <el-table-column align="center" prop="id" label="序号" width="100"></el-table-column>
      <el-table-column align="center" prop="roleId" label="权限" width="150" :formatter="formatter"></el-table-column>
      <el-table-column align="center" prop="userName" label="姓名" width="150"></el-table-column>
      <el-table-column align="center" prop="userCode" label="账号" width="150"></el-table-column>
      <el-table-column align="center" prop="userPwd" label="密码" width="150"></el-table-column>
      <el-table-column align="center" label="操作" width="250">
        <template slot-scope="props">
          <el-button size="mini" type="danger" @click="deleteUser(props.row.id)">删除</el-button>
          <el-button size="mini" type="success" @click="updateUser(props.row.id)">修改密码</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 50px;">
      <p>添加新的用户</p>
      <el-select v-model="value" placeholder="请选择用户权限" @change="changeInput">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

      <el-input placeholder="请输入姓名" style="width:250px;" v-model="userName" clearable></el-input>
      <el-input placeholder="请输入账号" style="width:250px;" v-model="userCode" clearable></el-input>
      <el-input placeholder="请输入密码" style="width:250px;" v-model="userPwd" clearable></el-input>

      <el-button @click="addUser" type="success">新建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        // {id: 0, roleId: 1, userName: '你好', userCode: 'xxx', userPwd: '123'}
      ],
      options: [
        {
          value: "1",
          label: "管理员"
        },
        {
          value: "2",
          label: "业务经理"
        },
        {
          value: "3",
          label: "风险经理"
        }
      ],
      value: "",
      userName: "",
      userCode: "",
      userPwd: "",
      roleId: "",
      currentRow: null
    };
  },
  created() {
    // this.getData();
  },
  methods: {
    getData() {
      this.$ajax({
        method: "get",
        url: "/user/list"
      }).then(res => {
        // console.log(res);
        // this.listLoading = false;
        this.tableData = res.data;
        // this.tableData.forEach(v)
      });
    },
    changeInput(i) {
      // console.log(i)
      this.roleId = i;
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    formatter(row, column) {
      return row.roleId === 1
        ? "管理员"
        : row.roleId === 2
        ? "业务经理"
        : "风险经理";
    },
    addUser() {
      if (!this.roleId || !this.userName || !this.userCode || !this.userPwd) {
         this.$alert('内容不为空', '温馨提示', {
          confirmButtonText: '确定'
        });
        return
      }
      let sendData = {
        userName: this.userName,
        userCode: this.userCode,
        userPwd: this.userPwd,
        roleId: this.roleId
      };
      // console.log(sendData);
      this.$ajax({
        method: "post",
        url: "/user/save",
        data: JSON.stringify(sendData)
      }).then(res => {
        // console.log(res);
        if (res.data.msg === "success") {
          this.$alert("成功", "保存状态", {
            confirmButtonText: "确定",
            callback: action => {
              // this.$router.push("/");
              // window.location.reload();
              this.getData();
            }
          });
        } else {
          this.$alert("失败", "提交状态", {
            confirmButtonText: "确定"
          });
        }
      });
    },
    deleteUser(id) {
      let sendData = {
        userId: id
      };
      // console.log(sendData);
      this.$ajax({
        method: "get",
        url: "/user/delete",
        params: sendData
      }).then(res => {
        // console.log(res);
        if (res.data.msg === "success") {
          this.$alert("成功", "保存状态", {
            confirmButtonText: "确定",
            callback: action => {
              // this.$router.push("/");
              // window.location.reload();
              this.getData();
            }
          });
        } else {
          this.$alert("失败", "提交状态", {
            confirmButtonText: "确定"
          });
        }
      });
    },
    updateUser(id) {
      console.log(id)

      this.$prompt('请输入新密码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          // inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {

          console.log('修改密码')
          this.$message({
            type: 'success',
            message: '修改成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
    }
  }
};
</script>