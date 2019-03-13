<template>
  <div class="app-container">
    <div v-if="step === 1">
      <div class="select-wrap clearfix">
        <p style="font-size: 30pt;">一、请选择合同类型</p>
        <div
          class="select-item"
          :class="selectItem === 'loanPersonal' ? 'active' : ''"
          @click="select('loanPersonal')"
        >借款合同(个人)</div>
        <div
          class="select-item"
          :class="selectItem === 'maxMortgage' ? 'active' : ''"
          @click="select('maxMortgage')"
        >最高额抵押合同</div>
        <!-- <div class="select-item">xx合同</div> -->
      </div>
      <div class="next-btn btn" @click="next">下一步</div>
    </div>
    <div v-else-if="step === 2">
      <p style="font-size: 30pt;">二、请填写合同信息</p>
      <loanPersonal
        :status="'new'"
        @save="onsave"
        @submit="onsubmit"
        v-if="contractType === 'loanPersonal'"
      ></loanPersonal>
      <maxMortgage
        :status="'new'"
        @save="onsave"
        @submit="onsubmit"
        v-if="contractType === 'maxMortgage'"
      ></maxMortgage>
    </div>
  </div>
</template>

<script>
// import loan from "@/components/contract/loan.vue";
import loanPersonal from "@/components/contract/loan-personal.vue";
import maxMortgage from "@/components/contract/max-mortgage.vue";

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
      // console.log(item);
      this.selectItem = item;
    },
    next() {
      this.contractType = this.selectItem;
      this.step = 2;
    },
    onsave(data) {
      // console.log(data);
      let sendData = {
        contractType: data.contractType,
        contractStatus: "0001",
        contractNumber: data.contractNumber,
        partyA: data.partyA,
        phoneNumber: data.phoneNumber,
        opRemark: data.operateTip,
        contractCreateAddress: data.contractCreateAddress,
        jsonData: JSON.stringify(data)
      };
      console.log(sendData);
      this.$ajax({
        method: "post",
        url: "/save",
        data: JSON.stringify(sendData),
        headers: {
          "Content-Type": "application/json;charset-UTF-8"
        }
      }).then(res => {
        if (res.data.msg === "success") {
          this.$alert("成功", "保存状态", {
            confirmButtonText: "确定",
            callback: action => {
              this.$router.push("/draft");
            }
          });
        } else {
          this.$alert("失败", "提交状态", {
            confirmButtonText: "确定"
          });
        }
      });
    },
    /**
     * 提交审核接口
     */
    onsubmit(data) {
      // console.log(data);
      let sendData = {
        contractType: data.contractType,
        contractStatus: "0001",
        contractNumber: data.contractNumber,
        partyA: data.partyA,
        phoneNumber: data.phoneNumber,
        opRemark: data.operateTip,
        contractCreateAddress: data.contractCreateAddress,
        jsonData: JSON.stringify(data)
      };
      console.log(sendData);
      this.$ajax({
        method: "post",
        url: "/saveAndSubmit",
        data: JSON.stringify(sendData),
        headers: {
          "Content-Type": "application/json;charset-UTF-8"
        }
      }).then(res => {
        if (res.data.msg === "success") {
          this.$alert("提交状态", "成功", {
            confirmButtonText: "确定",
            callback: action => {
              window.location.reload();
            }
          });
        } else {
          this.$alert("提交状态", "失败", {
            confirmButtonText: "确定"
          });
        }
      });
    }
  },
  components: {
    loanPersonal,
    maxMortgage
  }
};
</script>
<style>
.select-item {
  width: 200px;
  height: 200px;
  /* background-color: red; */
  border: 1px solid #ccc;
  margin-left: 20px;
  margin-top: 20px;
  float: left;
  transition: all 0.5s;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
  position: relative;
  text-align: center;
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

