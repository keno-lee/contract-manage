<template>
  <div class="app-container">
    <d-search @search="onsearch"></d-search>
    <el-table
      ref="filterTable"
      v-loading="listLoading"
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column align="center" prop="id" label="排序" width="50"></el-table-column>
      <el-table-column
        align="center"
        prop="contractType"
        label="合同类型"
        width="100"
        :formatter="formatter"
      ></el-table-column>
      <el-table-column align="center" prop="contractNumber" label="合同编号" width="100"></el-table-column>
      <el-table-column align="center" prop="partyA" label="甲方" width="100"></el-table-column>

      <el-table-column align="center" prop="createTime" label="合同创建日期" width="180"></el-table-column>
      <el-table-column align="center" prop="operator" label="合同操作者" width="100"></el-table-column>
      <!-- <el-table-column align="center" prop="opRemark" label="操作批注" width="200"></el-table-column> -->
      <el-table-column align="center" prop="lastModifyTime" label="最后操作时间" width="200"></el-table-column>
      <el-table-column align="center" prop="checkPerson" label="审核人" width="100"></el-table-column>
      <el-table-column align="center" prop="checkRemark" label="审核意见" width="200"></el-table-column>
      <el-table-column align="center" label="操作" width="250">
        <template slot-scope="props">
          <el-button size="mini" type="warning" @click="prview(props.row.id)">预览</el-button>
          <el-button size="mini" type="success" @click="print(props.row.id)">打印</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="deleteContract(props.row.id)"
            v-if="hasPermisson"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination"; // Secondary package based on el-pagination
import dSearch from "@/components/d-search.vue";

export default {
  data() {
    return {
      tableData: [
        // {
        //   id: 1,
        //   contractType: "借款合同",
        //   contractNumber: "abc123",
        //   partyA: "合肥xx公司",
        //   personCharge: "张总",
        //   cardType: '身份证',
        //   cardNumber: "342401198999219921",
        //   phoneNumber: "18888888888",
        //   contractCreateDate: "2016-05-02",
        //   operator: "老汉",
        //   opRemark: "这个客户非常抠",
        //   lastModifyTime: "2016-05-02",
        //   operate: "通过"
        // }
      ],
      total: 100,
      listQuery: {
        page: 1,
        limit: 20
      },
      listLoading: true,
      hasPermisson: false
    };
  },
  created() {
    if (localStorage.getItem("roleId") === "1") {
      this.hasPermisson = true;
    }
    this.getData(1, 20);
  },
  methods: {
    onsearch(data) {
      this.getData(this.listQuery.page, this.listQuery.limit, data);
    },
    deleteContract(id) {
      // this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
      //   confirmButtonText: "确定",
      //   cancelButtonText: "取消",
      //   type: "warning"
      // })
      //   .then(() => {
      //     this.$ajax({
      //       method: "get",
      //       url: "delete?contractId=" + od
      //     }).then(res => {
      //       if (res.data.msg === "success") {
      //         this.$message({
      //           type: "success",
      //           message: "删除成功"
      //         });
      //       } else {
      //         this.$message({
      //           type: "info",
      //           message: res.data.msg
      //         });
      //       }
      //     });
      //   })
      //   .catch(() => {
      //     this.$message({
      //       type: "info",
      //       message: "已取消删除"
      //     });
      //   });

      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$ajax({
            method: "get",
            url: "delete?contractId=" + id
          }).then(res => {
            if (res.data.msg === "success") {
              this.$message({
                type: "success",
                message: "删除成功"
              });
              this.getData(1, 20);
            } else {
              this.$message({
                type: "info",
                message: res.data.msg
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    getData(page, limit, data) {
      let sendData = {
        contractStatus: "0004", // 当前页是待提交状态，写死
        sort: "id", // 根据什么字段来排序
        order: "desc", // 默认降序
        page: page, // 当前页码
        rows: limit // 每页多少数据
      };
      sendData = Object.assign(sendData, data);
      this.$ajax({
        method: "get",
        url: "getList",
        params: sendData
      }).then(res => {
        // console.log(res);
        this.listLoading = false;
        this.tableData = res.data.list;
        this.total = res.data.total;
      });
    },
    prview(id) {
      // console.log(id);
      // this.$router.push("/preview-water?id=" + id);
      let routeData = this.$router.resolve({
        path: "/preview-water",
        query: { id: id }
      });
      window.open(routeData.href, "_blank");
    },
    print(id) {
      // console.log(id);
      // this.$router.push("/print?id=" + id);
      let routeData = this.$router.resolve({
        path: "/print",
        query: { id: id }
      });
      window.open(routeData.href, "_blank");
    },
    editPreview(id) {
      // console.log('preview')
      this.$router.push("/operate?id=" + id);
    },
    getList(info) {
      this.getData(info.page, info.limit);
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      let obj = {
        "0001": "个人借款合同",
        "0002": "个人综合授信合同",
        "0003": "最高额抵押合同",
        "0004": "个人最高额保证合同",
        "0005": "保证合同（个人）",
        "0006": "个人循环借款合同正式版",
        "0007": "借款合同(企业)",
        "0008": "综合授信合同(企业)"
      };
      return obj[row.contractType];
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  },
  components: {
    Pagination,
    dSearch
  }
};
</script>