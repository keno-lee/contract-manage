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
    <maxGuaranteePersonal
      v-if="contractType === '0004'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></maxGuaranteePersonal>
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
    <ensureBusiness
      v-if="contractType === '0009'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></ensureBusiness>
    <mortgage
      v-if="contractType === '0010'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></mortgage>
    <maxGuaranteeBusiness
      v-if="contractType === '0011'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></maxGuaranteeBusiness>
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
    <creditPersonal2
      v-if="contractType === '0016'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></creditPersonal2>
    <maxGuaranteePersonal2
      v-if="contractType === '0017'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></maxGuaranteePersonal2>
    <maxGuaranteeBusiness2
      v-if="contractType === '0018'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></maxGuaranteeBusiness2>
    <ensurePersonal2
      v-if="contractType === '0019'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></ensurePersonal2>
    <ensureBusiness2
      v-if="contractType === '0020'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></ensureBusiness2>
    <mortgage2
      v-if="contractType === '0021'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></mortgage2>
    <loanBusiness2
      v-if="contractType === '0022'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></loanBusiness2>
    <creditBusiness2
      v-if="contractType === '0023'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></creditBusiness2>
    <maxZhizha2
      v-if="contractType === '0024'"
      :status="status"
      :infoData="infoData"
      @save="save"
      @submit="submit"
      @reject="reject"
      @pass="pass"
    ></maxZhizha2>
  </div>
</template>
<script>
/**
 * 所有合同的总入口
 */
import loanPersonal from "@/components/contract/loan-personal.vue"; // 借款合同(个人)
import maxMortgage from "@/components/contract/max-mortgage.vue";
import creditPersonal from "@/components/contract/credit-personal.vue";
import loanLoopPersonal from "@/components/contract/loan-loop-personal.vue";
import loanBusiness from "@/components/contract/loan-business.vue";
import creditBusiness from "@/components/contract/credit-business.vue";

import ensurePersonal from "@/components/contract/ensure-personal.vue"; // 保证合同(个人)
import ensureBusiness from "@/components/contract/ensure-business.vue"; //（备注：max-guarantee-business 和 ensure-business 交换过）

import mortgage from "@/components/contract/mortgage.vue"; // 抵押合同 0010

import maxGuaranteePersonal from "@/components/contract/max-guarantee-personal.vue"; // 最高额保证合同(个人)
import maxGuaranteeBusiness from "@/components/contract/max-guarantee-business.vue"; // 最高额保证合同(企业) （备注：max-guarantee-business 和 ensure-business 交换过）

import maxZhizha from "@/components/contract/max-zhizha.vue"; // 最高额质押合同

import maxMortgage2 from "@/components/contract/max-mortgage2.vue"; // 最高额抵押合同 -2 0013
import loanLoopPersonal2 from "@/components/contract/loan-loop-personal2.vue"; // 个人循环借款合同 -2 0014
import loanPersonal2 from "@/components/contract/loan-personal2.vue"; // 借款合同(个人) -2 0015
import creditPersonal2 from "@/components/contract/credit-personal2.vue"; // 综合授信(个人) -2 0016

import maxGuaranteePersonal2 from "@/components/contract/max-guarantee-personal2.vue"; // 最高额保证合同(个人) -2  0017
import maxGuaranteeBusiness2 from "@/components/contract/max-guarantee-business2.vue"; // 最高额保证合同(企业) -2  0018

import ensurePersonal2 from "@/components/contract/ensure-personal2.vue"; // 保证合同(个人) -2  0019
import ensureBusiness2 from "@/components/contract/ensure-business2.vue"; // 保证合同(企业) -2  0020
import mortgage2 from "@/components/contract/mortgage2.vue"; // 抵押合同 -2 0021
import loanBusiness2 from "@/components/contract/loan-business2.vue"; // 借款合同(企业) -2 0022
import creditBusiness2 from "@/components/contract/credit-business2.vue"; // 综合授信合同（企业） -2 0023
import maxZhizha2 from "@/components/contract/max-zhizha2.vue"; // 最高额质押合同 -2 0024

export default {
  components: {
    loanPersonal,
    maxMortgage,
    creditPersonal,
    maxGuaranteePersonal,
    ensurePersonal,
    loanLoopPersonal,
    loanBusiness,
    creditBusiness,
    maxGuaranteeBusiness,
    mortgage,
    ensureBusiness,
    maxZhizha,
    maxMortgage2,
    loanLoopPersonal2,
    loanPersonal2,
    creditPersonal2,
    maxGuaranteePersonal2,
    maxGuaranteeBusiness2,
    ensurePersonal2,
    ensureBusiness2,
    mortgage2,
    loanBusiness2,
    creditBusiness2,
    maxZhizha2
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

