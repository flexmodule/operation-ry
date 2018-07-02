<template>
  <div class="login_container">
    <div class="login_main" v-loading="load_data" element-loading-text="正在登陆中..." @keyup.enter="submit">
      <div class="input_content">
        <input type="text" v-model="input_email" class="input_email" placeholder="请输入用户名">
        <input type="password" v-model="input_pwd" class="input_pwd" placeholder="请输入密码">
        <div class="input_submit" @click="submit">登录</div>
      </div>
    </div>
  </div>

</template>
<script>
import {setToken,setName} from '@/utils/utils'
export default {
  methods: {
    submit() {
      if (!this.$data.input_email || !this.$data.input_pwd) {
        this.$notify.info({
          title: '温馨提示',
          message: '账号或密码为空'
        })
      }else{
        this.load_data = true
        this.loginAction({
          email: this.$data.input_email,
          password: this.$data.input_pwd
        })
      }
    },
    loginAction(data){
      console.log(1)
      this.$http({
        url: '/ops/login/',
        method: 'post',
        data: data
      }).then((res)=>{
        console.log(res)
        this.load_data = false       
        if (res.data.rc===0) {
          setToken('Base '+ res.data.data.token.data)
          setName(res.data.data.userinfo.userName)
          // this.$message.success('登录成功')
          // setTimeout(()=>{
            this.$router.push({path:'/'})            
          // },2000)          
        } else {
          this.$message.error(res.data.msg)
        }
      }).catch((err)=>{
        
      })
    }
  },
  data() {
    return {
      input_email: '',
      input_pwd: '',
      load_data: false
    }
  }
}
</script>

<style>
.login_container {
  width: 100%;
  height: 100%;
  background-image: url(../../static/images/img_bj_dl.png);
  background-size: cover;
}

.login_main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input_content {
  background-color: #fff;
  padding: 50px;
}

.input_content input {
  width: 357px;
  height: 50px;
  text-indent: 20px;
  border: 1px solid #e9e2e2;
  border-radius: 3px;
  background-color: #fff;
  display: block;
  margin: 0 auto;
  margin-bottom: 25px;
}

.input_submit {
  width: 357px;
  height: 50px;
  margin: 0 auto;
  background-color: #66b1ff;
  border-radius: 3px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  cursor: pointer;
}

</style>
