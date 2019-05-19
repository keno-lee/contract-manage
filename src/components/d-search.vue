<template>
  <div class="search-index" style="padding-bottom: 20px;width: 100%">
    <!-- 日期选择器 -->
    <!-- <el-date-picker
      v-model="time"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions"
      value-format="yyyy-MM-dd"
    ></el-date-picker>-->
    <!-- 合同类型 -->
    <el-select v-model="value" placeholder="请选择合同类型" @change="changeInput">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <!-- 合同编号 -->
    <el-input v-model="contractNumber" style="width:200px;" placeholder="请输入合同编号"></el-input>
    <!-- 甲方 partyA -->
    <el-input v-model="partyA" style="width:200px;" placeholder="请输入甲方"></el-input>
    <!-- 合同操作者 -->
    <el-input v-model="operator" style="width:200px;" placeholder="请输入合同操作者" v-if="hasPermisson"></el-input>
    <!-- 联系方式 phoneNumber -->
    <!-- <el-input v-model="phoneNumber" style="width:200px;" placeholder="请输入联系方式"></el-input> -->
    <!-- 操作人 operator -->
    <!-- <el-input v-model="operator" style="width:200px;" placeholder="请输入操作人"></el-input> -->
    <el-button size="medium" type="success" @click="search()">搜索</el-button>
  </div>
</template>

<script>
import contractSearch from "@/utils/data/contractSearch.json"; // 映射的合同

export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      time: "",
      partyA: "",
      phoneNumber: "",
      operator: "",
      options: contractSearch,
      value: "",
      contractType: "",
      contractNumber: "",
      operator: "",
      hasPermisson: true
    };
  },
  created() {
    if (localStorage.getItem('roleId') === '2') {
      this.hasPermisson = false
    }
  },
  methods: {
    changeInput(i) {
      // console.log(i)
      this.contractType = i;
    },
    search() {
      console.log(this.time, this.partyA, this.operator, this.value);
      let data = {
        createTimeStart: this.time ? this.time[0] : "",
        createTimeEnd: this.time ? this.time[1] : "",
        partyA: this.partyA,
        operator: this.operator,
        contractType: this.contractType,
        contractNumber: this.contractNumber,
        operator: this.operator
      };
      // console.log("sou", data);
      this.$emit("search", data);
    }
  }
};
</script>
<style>
.search-index .el-date-editor span.el-range-separator {
  padding: 0;
}
</style>


