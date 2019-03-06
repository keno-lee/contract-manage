<template>
  <div class="preview-index">
    <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button>
    <el-button @click="clearFilter">清除所有过滤器</el-button>-->
    <el-table ref="filterTable" :data="tableData" border style="width: 100%">
      <el-table-column align="center" prop="id" label="排序" width="50"></el-table-column>
      <el-table-column align="center" prop="contractType" label="合同类型" width="100"></el-table-column>
      <el-table-column align="center" prop="contractNumber" label="合同编号" width="100"></el-table-column>
      <el-table-column align="center" prop="partyA" label="甲方" width="100"></el-table-column>
      <el-table-column align="center" prop="personCharge" label="负责人" width="100"></el-table-column>
      <el-table-column align="center" prop="cardType" label="证件号码" width="200"></el-table-column>
      <el-table-column align="center" prop="phoneNumber" label="联系方式" width="150"></el-table-column>
      <el-table-column align="center" prop="contractCreateDate" label="合同签订日期" width="150"></el-table-column>
      <el-table-column align="center" prop="operator" label="合同操作者" width="100"></el-table-column>
      <el-table-column align="center" prop="opRemark" label="操作批注" width="200"></el-table-column>
      <el-table-column align="center" prop="lastModifyTime" label="最后操作时间" width="150"></el-table-column>
      <!-- <el-table-column align="center" prop="operate" label="操作" width="100">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>-->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="editPreview(1)">去审核</el-button>
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
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          contractType: "借款合同",
          contractNumber: "abc123",
          partyA: "合肥xx公司",
          personCharge: "张总",
          cardType: "342401198999219921",
          phoneNumber: "18888888888",
          contractCreateDate: "2016-05-02",
          operator: "老汉",
          opRemark: "这个客户非常抠",
          lastModifyTime: "2016-05-02",
          operate: "通过"
        },
        {
          id: 1,
          contractType: "借款合同",
          contractNumber: "abc123",
          partyA: "合肥xx公司",
          personCharge: "张总",
          cardType: "342401198999219921",
          phoneNumber: "18888888888",
          contractCreateDate: "2016-05-02",
          operator: "老汉",
          opRemark: "这个客户非常抠",
          lastModifyTime: "2016-05-02"
        },
        {
          id: 1,
          contractType: "借款合同",
          contractNumber: "abc123",
          partyA: "合肥xx公司",
          personCharge: "张总",
          cardType: "342401198999219921",
          phoneNumber: "18888888888",
          contractCreateDate: "2016-05-02",
          operator: "老汉",
          opRemark: "这个客户非常抠",
          lastModifyTime: "2016-05-02"
        },
        {
          id: 1,
          contractType: "借款合同",
          contractNumber: "abc123",
          partyA: "合肥xx公司",
          personCharge: "张总",
          cardType: "342401198999219921",
          phoneNumber: "18888888888",
          contractCreateDate: "2016-05-02",
          operator: "老汉",
          opRemark: "这个客户非常抠",
          lastModifyTime: "2016-05-02"
        }
      ],
      total: 100,
      listQuery: {
        page: 1,
        limit: 20
      }
    };
  },
  methods: {
    editPreview(id) {
      // console.log('preview')
      this.$router.push('/operate?id=' + id)
    },
    getList() {},
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
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
    Pagination
  }
};
</script>