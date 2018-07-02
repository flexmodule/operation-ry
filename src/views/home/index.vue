<template>
    <div class="StandardData-container container">
    <div class="left-menu">
      <el-menu default-active="#" router class="el-menu-vertical-list" background-color="#e1edff" text-color="#414243" active-text-color="#000">
        <el-submenu index="">
          <template slot="title">
            <span>系统管理员</span>
          </template>
         <el-menu-item index="">
            <span slot="title">列表</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">添加</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="">
          <template slot="title">
            <span>用户管理</span>
          </template>
          <el-menu-item index="">
            <span slot="title">1</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">2</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">3</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">4</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="">
          <template slot="title">
            <span>股票管理</span>
          </template>
          <el-menu-item index="">
            <span slot="title">股票管理1</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">股票管理2</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="">
          <template slot="title">
            <span>成文类型(市价/限价)</span>
          </template>
          <el-menu-item index="">
            <span slot="title">1</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">2</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">3</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="">
          <template slot="title">
            <span>期权类型(看涨/看跌)</span>
          </template>
          <el-menu-item index="">
            <span slot="title">1</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">2</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">3</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="">
          <template slot="title">
            <span>股票类型</span>
          </template>
          <el-menu-item index="">
            <span slot="title">1</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">2</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="">
          <template slot="title">
            <span>行权周期</span>
          </template>
          <el-menu-item index="">
            <span slot="title">1</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">2</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="">
          <template slot="title">
            <span>费率管理</span>
          </template>
          <el-menu-item index="">
            <span slot="title">1</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">2</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="">
          <template slot="title">
            <span>订单管理</span>
          </template>
          <el-menu-item index="">
            <span slot="title">历史订单</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">未行权订单</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="">
          <template slot="title">
            <span>出入金管理</span>
          </template>
          <el-menu-item index="">
            <span slot="title">出入金申请列表</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">出入金历史</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="main-content">
      <!-- <back-button></back-button> -->
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>
<style lang="scss">
.left-menu {
  width: 201px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 40px;
}
.el-menu {
  min-height: 100%;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 25px;
}
.main-content {
  padding-left: 221px;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
}
</style>

<script>
import { getToken } from '@/utils/utils'
export default {
  name: "Home",
  data() {
    return {

    };
  },
  methods: {

  },
  mounted () {
      // if (!getToken()) {
      //     this.$message.error('登录信息失效，请重新登录！')
      //     setTimeout(()=>{
      //         this.$router.push('/user/login')
      //     },1000)
      // }
  }
};
</script>
