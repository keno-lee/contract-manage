<template>
  <el-row class="tac">
    <el-col :span="24" style="height: 100%">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :show-timeout="200"
        :default-active="$route.path"
        mode="vertical"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <el-menu-item
          :class="getSideBarStatus ? '' : 'close'"
          :index="v.redirect"
          v-for="(v, i) in sideBarShow"
          :key="i"
          @click="$router.push(v.redirect)"
        >
          <svg-icon :icon-class="v.children[0].meta.icon"/>
          <span slot="title">{{v.children[0].meta.title}}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
import { constantRouterMap, asyncRouterMap } from "@/router";
export default {
  data() {
    return {
      sideBarShow: []
    };
  },
  created() {
    let arrResoure = [...constantRouterMap, ...asyncRouterMap];
    let arrShow = arrResoure.filter(v => {
      return v.hidden !== true;
    });
    let limit = [];
    if (localStorage.getItem("roleId") == 1) {
      // 管理员
      limit = ["/draft", "/audit", "/reject", "/pass", "/user"];
    } else if (localStorage.getItem("roleId") == 2) {
      // 业务经理
      limit = ["/new", "/draft", "/audit", "/reject", "/pass"];
    } else if (localStorage.getItem("roleId") == 3) {
      // 风险经理
      limit = ["/audit", "/reject", "/pass"];
    }
    let arr = [];
    for (var i = 0; i < arrShow.length; i++) {
      if (limit.indexOf(arrShow[i].redirect) > -1) {
        arr.push(arrShow[i]);
      }
    }
    this.sideBarShow = arr;
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  computed: {
    getSideBarStatus() {
      return this.$store.getters.sidebar.opened;
    }
  }
};
</script>
<style scoped>
.close {
  padding: 0 10px !important;
}
</style>
