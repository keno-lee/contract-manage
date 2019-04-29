<template>
  <div>
    <loanPersonal
      v-if="contractType === '0001'"
      :infoData="infoData"
      :status="status"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></loanPersonal>
    <creditPersonal
      v-if="contractType === '0002'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></creditPersonal>
    <maxMortgage
      v-if="contractType === '0003'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></maxMortgage>
    <guaranteePersonal
      v-if="contractType === '0004'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></guaranteePersonal>
    <ensurePersonal
      v-if="contractType === '0005'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></ensurePersonal>
    <loanLoopPersonal
      v-if="contractType === '0006'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></loanLoopPersonal>
    <loanBusiness
      v-if="contractType === '0007'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></loanBusiness>
    <creditBusiness
      v-if="contractType === '0008'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></creditBusiness>
    <guaranteeBusiness
      v-if="contractType === '0009'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></guaranteeBusiness>
    <mortgage
      v-if="contractType === '0010'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></mortgage>
    <ensureBusiness
      v-if="contractType === '0011'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></ensureBusiness>
    <maxZhizha
      v-if="contractType === '0012'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></maxZhizha>
    <maxMortgage2
      v-if="contractType === '0013'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></maxMortgage2>
    <loanLoopPersonal2
      v-if="contractType === '0014'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></loanLoopPersonal2>
    <loanPersonal2
      v-if="contractType === '0015'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></loanPersonal2>
  </div>
</template>
<script>
/**
 * 所有合同的总入口
 */
import loanPersonal from "@/components/contract/loan-personal.vue"; // 借款合同(个人)
import maxMortgage from "@/components/contract/max-mortgage.vue";
import creditPersonal from "@/components/contract/credit-personal.vue";
import guaranteePersonal from "@/components/contract/guarantee-personal.vue";
import ensurePersonal from "@/components/contract/ensure-personal.vue";
import loanLoopPersonal from "@/components/contract/loan-loop-personal.vue";
import loanBusiness from "@/components/contract/loan-business.vue";
import creditBusiness from "@/components/contract/credit-business.vue";
import guaranteeBusiness from "@/components/contract/guarantee-business.vue";
import mortgage from "@/components/contract/mortgage.vue";
import ensureBusiness from "@/components/contract/ensure-business.vue";
import maxZhizha from "@/components/contract/max-zhizha.vue";
import maxMortgage2 from "@/components/contract/max-mortgage2.vue"; // 最高额抵押合同 -2
import loanLoopPersonal2 from "@/components/contract/loan-loop-personal2.vue"; // 个人循环借款合同 -2
import loanPersonal2 from "@/components/contract/loan-personal2.vue"; // 借款合同(个人) -2


export default {
  components: {
    loanPersonal,
    maxMortgage,
    creditPersonal,
    guaranteePersonal,
    ensurePersonal,
    loanLoopPersonal,
    loanBusiness,
    creditBusiness,
    guaranteeBusiness,
    mortgage,
    ensureBusiness,
    maxZhizha,
    maxMortgage2,
    loanLoopPersonal2,
    loanPersonal2
  },
  data() {
    return {};
  },
  props: {
    contractType: {
      default: "00001",
      type: String
    },
    infoData: {
      default() {
        return {};
      },
      type: Object
    },
    status: {
      // 状态 new: 新建合同  draft: 重新编辑
      default: "",
      type: String
    }
  },
  methods: {
    save(info) {
      this.$emit("save", info);
    },
    submit(info) {
      this.$emit("submit", info);
    },
    reject(info) {
      this.$emit("reject", info);
    },
    pass(info) {
      this.$emit("pass", info);
    }
  }
};
</script>

