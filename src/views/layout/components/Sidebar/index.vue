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
        <el-menu-item
          :index="i+1 + ''"
          v-for="(v, i) in sideBarShow"
          :key="i"
          @click="$router.push(v.redirect)"
        >
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
    let arrResoure = [...constantRouterMap, ...asyncRouterMap];
    let arrShow = arrResoure.filter(v => {
      return v.hidden !== true;
    });
    let limit = [];
    if (localStorage.getItem("roleId") === '2') {
      // 业务经理
      limit = ["/new", "/draft", "/audit", "/reject", "/pass"];
    } else if (localStorage.getItem("roleId") === '3') {
      // 风险经理
      limit = ["/draft", "/audit", "/reject", "/pass"];
    } else {
      limit = ["/new", "/draft", "/audit", "/reject", "/pass", "/user"];
    }
    let arr = [];
    for (var i = 0; i < arrShow.length; i++) {
      if (limit.indexOf(arrShow[i].redirect) > -1) {
        arr.push(arrShow[i]);
      }
    }
    this.sideBarShow = arr
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>