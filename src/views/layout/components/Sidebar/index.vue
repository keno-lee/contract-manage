<template>
  <el-row class="tac">
    <el-col :span="24" style="height: 100%">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item :index="i+1 + ''" v-for="(v, i) in sideBarShow" :key="i" @click="$router.push(v.redirect)">
          <i class="el-icon-menu"></i>
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
    let arr = [...constantRouterMap, ...asyncRouterMap];
    this.sideBarShow = arr.filter(v => {
      return v.hidden !== true;
    });
    console.log(this.sideBarShow);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>