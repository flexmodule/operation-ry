<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">欢迎登录人人期权后台管理系统</router-link>
    </div>
    <div class="user-info-wrap">
      <div class="user-info">
        <span class="user-name">{{userName}}</span>
        <span class="edit-pwd">修改密码</span>
        <!-- <span class="user-msg">消息</span> -->
        <span class="login-out" @click="signOut">退出</span>
      </div>

    </div>
  </header>
</template>
<style lang="scss">
header {
  width: 100%;
  height: 40px;
  padding: 0 30px;
  background-color: #326ce5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  .logo {
    height: 100%;
    width: 200px;
    display: flex;
    align-items: center;
    a {
      color: #fff;
    }
    img {
      vertical-align: middle;
    }
  }
  .user-info-wrap {
    display: flex;
    align-items: center;
    .user-info {
      font-size: 16px;
      span {
        cursor: pointer;
        padding: 0 10px;
        border-left: 1px solid #fff;
      }
    }
    .select {
      margin-right: 20px;
      input {
        height: 30px;
      }
    }
  }
  .el-select .el-input .el-select__caret {
    color: #000;
  }
}
</style>

<script>
import { deleteToken, deleteUserName, getName } from "@/utils/utils";
export default {
  name: "HeadMenu",
  data() {
    return {
      value: "/home",
      userName: ""
    };
  },
  methods: {
    signOut() {
      this.$confirm("是否确认退出？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteToken();
          deleteUserName();
          // this.$message({
          //   type: "success",
          //   message: "已登出，正在关闭页面"
          // });
          // setTimeout(() => {
            this.$router.push({ path: "/user/login" });
          // }, 2000);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消退出"
          });
        });
    }
  },
  mounted() {
    // this.value = "/" + this.$route.path.split("/")[1];
    // this.userName = getName();
  }
};
</script>