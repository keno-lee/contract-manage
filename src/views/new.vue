<template>
  <div class="app-container">
    <div v-if="step === 1">
      <div class="select-wrap clearfix">
        <p style="font-size: 30pt;">一、请选择合同类型</p>
        <div
          class="select-item"
          :class="selectItem === 'loan' ? 'active' : ''"
          @click="select('loan')"
        >借款合同</div>
        <div class="select-item">借款合同</div>
        <div class="select-item">借款合同</div>
        <div class="select-item">借款合同</div>
        <div class="select-item">借款合同</div>
        <div class="select-item">借款合同</div>
        <div class="select-item">借款合同</div>
        <div class="select-item">借款合同</div>
        <div class="select-item">借款合同</div>
      </div>
      <div class="next-btn btn" @click="next">下一步</div>
    </div>
    <div v-else-if="step === 2">
      <p style="font-size: 30pt;">二、请填写合同信息</p>
      <loan ref="info" v-if="contractType === 'loan'"></loan>

      <div class="save-btn btn" @click="next">暂存</div>
      <div class="submit-btn btn" @click="submit">提交审核</div>
      <div class="submit-btn btn" @click="print">打印</div>
    </div>
  </div>
</template>

<script>
import loan from "@/components/contract/loan.vue";
export default {
  data() {
    return {
      step: 1, // 步骤  1: 第一步选择类型 2: 填写合同
      selectItem: "", // 选中项
      contractType: "" // 借款合同类型
    };
  },
  methods: {
    select(item) {
      console.log(item);
      this.selectItem = "loan";
    },
    next() {
      this.contractType = this.selectItem;
      this.step = 2;
    },
    submit() {

    },
    print() {
      let routeUrl = this.$router.resolve({
        path: "/pdf/download"
      });
      window.open(routeUrl.href, "_blank");
    }
  },
  components: {
    loan
  }
};
</script>
<style>
.select-item {
  width: 200px;
  height: 200px;
  background-color: red;
  margin-left: 20px;
  margin-top: 20px;
  float: left;
  transition: all 0.5s;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
  position: relative;
}
.select-item.active::after {
  content: "";
  display: block;
  width: 100px;
  height: 100px;
  background: url("../assets/selected.png") center center no-repeat;
  background-size: contain;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.select-item:hover {
  transform: scale(1.05);
  transition: all 0.5s;
}
.btn {
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 10px;
}
.next-btn {
  background-color: #67c23a;
  margin-top: 20px;
  margin-right: 40px;
  float: right;
}

.save-btn {
  background-color: #909399;
  float: right;
}

.submit-btn {
  background-color: #67c23a;
  float: right;
}
</style>

