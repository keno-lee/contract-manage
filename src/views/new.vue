<template>
  <div class="app-container">
    <div v-if="step === 1">
      <div class="select-wrap clearfix">
        <p style="font-size: 30pt;">一、请选择合同类型</p>
        <!-- <div
          class="select-item"
          :class="selectItem === '0001' ? 'active' : ''"
          @click="select('0001')"
        >借款合同(个人)</div>
        <div
          class="select-item"
          :class="selectItem === '0003' ? 'active' : ''"
          @click="select('0003')"
        >最高额抵押合同</div>
        <div
          class="select-item"
          :class="selectItem === '0002' ? 'active' : ''"
          @click="select('0002')"
        >综合授信合同(个人)</div>
        <div
          class="select-item"
          :class="selectItem === '0004' ? 'active' : ''"
          @click="select('0004')"
        >最高额保证合同(个人)</div>
        <div
          class="select-item"
          :class="selectItem === '0005' ? 'active' : ''"
          @click="select('0005')"
        >保证合同（个人）</div>
        <div
          class="select-item"
          :class="selectItem === '0006' ? 'active' : ''"
          @click="select('0006')"
        >个人循环借款合同正式版</div>
        <div
          class="select-item"
          :class="selectItem === '0007' ? 'active' : ''"
          @click="select('0007')"
        >借款合同（企业）</div>
        <div
          class="select-item"
          :class="selectItem === '0008' ? 'active' : ''"
          @click="select('0008')"
        >综合授信合同（企业）</div>

        <div
          class="select-item"
          :class="selectItem === '0009' ? 'active' : ''"
          @click="select('0009')"
        >保 证 合 同（企业）</div>
        <div
          class="select-item"
          :class="selectItem === '0010' ? 'active' : ''"
          @click="select('0010')"
        >抵 押 合 同</div>
        <div
          class="select-item"
          :class="selectItem === '0011' ? 'active' : ''"
          @click="select('0011')"
        >最高额保证合同（企业）</div>
        <div
          class="select-item"
          :class="selectItem === '0012' ? 'active' : ''"
          @click="select('0012')"
        >最高额质押合同</div>-->
        <div
          class="select-item"
          :class="selectItem === '0013' ? 'active' : ''"
          @click="select('0013')"
        >最高额抵押合同</div>
        <div
          class="select-item"
          :class="selectItem === '0014' ? 'active' : ''"
          @click="select('0014')"
        >个人循环借款合同正式版</div>
        <div
          class="select-item"
          :class="selectItem === '0015' ? 'active' : ''"
          @click="select('0015')"
        >借款合同(个人)</div>
        <div
          class="select-item"
          :class="selectItem === '0016' ? 'active' : ''"
          @click="select('0016')"
        >综合授信(个人)</div>
        <div
          class="select-item"
          :class="selectItem === '0017' ? 'active' : ''"
          @click="select('0017')"
        >最高额保证合同(个人)</div>
        <div
          class="select-item"
          :class="selectItem === '0018' ? 'active' : ''"
          @click="select('0018')"
        >最高额保证合同(企业)</div>
        <div
          class="select-item"
          :class="selectItem === '0019' ? 'active' : ''"
          @click="select('0019')"
        >保证合同(个人)(新版)</div>
        <div
          class="select-item"
          :class="selectItem === '0020' ? 'active' : ''"
          @click="select('0020')"
        >保证合同(企业)(新版)</div>
        <div
          class="select-item"
          :class="selectItem === '0021' ? 'active' : ''"
          @click="select('0021')"
        >抵押合同(新版)</div>
        <div
          class="select-item"
          :class="selectItem === '0022' ? 'active' : ''"
          @click="select('0022')"
        >借款合同(企业)(新版)</div>
        <div
          class="select-item"
          :class="selectItem === '0023' ? 'active' : ''"
          @click="select('0023')"
        >综合授信合同（企业）(新版)</div>
        <div
          class="select-item"
          :class="selectItem === '0024' ? 'active' : ''"
          @click="select('0024')"
        >最高额质押合同(新版)</div>
        <div
          class="select-item"
          :class="selectItem === '0025' ? 'active' : ''"
          @click="select('0025')"
        >商业汇票贴现合同</div>
        <div
          class="select-item"
          :class="selectItem === '0026' ? 'active' : ''"
          @click="select('0026')"
        >最高额抵押合同(商票保贴业务)</div>
        <div
          class="select-item"
          :class="selectItem === '0027' ? 'active' : ''"
          @click="select('0027')"
        >最高额保证合同个人(商票保贴业务)</div>
        <div
          class="select-item"
          :class="selectItem === '0028' ? 'active' : ''"
          @click="select('0028')"
        >最高额保证合同企业(商票保贴业务)</div>
      </div>
      <div class="next-btn btn" @click="next">下一步</div>
    </div>
    <div v-else-if="step === 2">
      <p style="font-size: 30pt;">二、请填写合同信息</p>
      <contract :status="'new'" :contractType="contractType" @save="onsave" @submit="onsubmit"></contract>
    </div>
  </div>
</template>

<script>
import contract from "@/components/contract/index.vue";

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
        personCharge: data.personCharge || "",
        jsonData: JSON.stringify(data)
      };
      // console.log(sendData);
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
        contractStatus: "0002",
        contractNumber: data.contractNumber,
        partyA: data.partyA,
        phoneNumber: data.phoneNumber,
        opRemark: data.operateTip,
        contractCreateAddress: data.contractCreateAddress,
        personCharge: data.personCharge || "",
        jsonData: JSON.stringify(data)
      };
      // console.log(sendData);
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
              // window.location.reload();
              this.$router.push("/audit");
              this.$store.commit("DEL_VISITED_VIEW", { path: "/new" });
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
    contract
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
  background-color: #67c23a;
  float: right;
}

.submit-btn {
  background-color: #67c23a;
  float: right;
}
</style>

