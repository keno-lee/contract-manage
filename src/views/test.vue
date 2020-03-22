<template>
  <Index :contractType="contractType"></Index>
</template>
<script>
import Index from "@/components/contract/index.vue";

export default {
  data() {
    return {
      contractType: "0001"
    };
  },
  components: {
    Index
  },
  created() {
    this.contractType = this.$route.query.id || "0001";
  }
};
</script>
