<template>
  <div class="search-index" style="padding-bottom: 20px;width: 100%">
    <!-- 日期选择器 -->
    <el-date-picker
      v-model="time"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions"
      value-format="yyyy-MM-dd"
    ></el-date-picker>
    <!-- 合同类型 -->
    <el-select v-model="value" placeholder="请选择合同类型" @change="changeInput">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <!-- 甲方 partyA -->
    <el-input v-model="partyA" style="width:200px;" placeholder="请输入甲方"></el-input>
    <!-- 联系方式 phoneNumber -->
    <!-- <el-input v-model="phoneNumber" style="width:200px;" placeholder="请输入联系方式"></el-input> -->
    <!-- 操作人 operator -->
    <!-- <el-input v-model="operator" style="width:200px;" placeholder="请输入操作人"></el-input> -->
    <el-button size="medium" type="success" @click="search()">搜索</el-button>
  </div>
</template>

<script>
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
      options: [
        {
          value: "0001",
          label: "个人借款合同"
        },
        {
          value: "0002",
          label: "个人综合授信合同"
        },
        {
          value: "0003",
          label: "最高额抵押合同"
        },
        {
          value: "0004",
          label: "个人最高额保证合同"
        },
        {
          value: "0005",
          label: "保证合同（个人）"
        },
        {
          value: "0006",
          label: "个人循环借款合同正式版"
        },
        {
          value: "0007",
          label: "借款合同(企业)"
        },
        {
          value: "0008",
          label: "综合授信合同(企业)"
        },
        {
          value: "0009",
          label: "保证合同(企业)"
        },
        {
          value: "0010",
          label: "抵押合同"
        },
        {
          value: "0011",
          label: "最高额保证合同(企业)"
        },
        {
          value: "0012",
          label: "最高额质押合同"
        },
        {
          value: "0013",
          label: "最高额抵押合同(新版)"
        },
        {
          value: "0014",
          label: "个人循环借款合同正式版(新版)"
        }
      ],
      value: '',
      contractType: ''
    };
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
        contractType: this.contractType
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


