<template>
  <Index :contractType="id"></Index>
</template>
<script>
import Index from "@/components/contract/index.vue";

export default {
  data() {
    return {
      id: id
    };
  },
  components: {
    Index
  },
  created() {
    this.id = this.$route.query.id;
  }
};
</script>
