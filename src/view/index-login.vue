<template>
    <div class='login' id="login">
      <div class="login-windows">
        <el-form :model="loginForm" status-icon ref="loginForm" :rules="loginRules" >
          <h3>请登录</h3>
          <el-form-item label="用户名:" prop="username">
            <el-input v-model="loginForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginSub('loginForm')">登录</el-button>
            <el-button @click="createSub">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
      </div>
</template>

<script>
export default {
  name: 'index-login',
  data () {
    var checkUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号！'))
      } else {
        callback()
      }
    }
    var checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码！'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      userMessage: {
        user: 'herm',
        pass: '1qaz'
      },
      loginRules: {
        username: [
          {validator: checkUser, trigger: 'blur'}
        ],
        password: [
          {validator: checkPass, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    loginSub (value) {
      this.$refs[value].validate((valid) => {
        console.log(valid)
        if (valid) {
          if (this.loginForm.username !== this.userMessage.user || this.loginForm.password !== this.userMessage.pass) {
            this.$alert('账号或密码错误!')
          } else {
            console.log(this.loginForm)
            this.$router.push('myWeb')
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    createSub () {
      this.$alert('这个没有写，懒得写，爱谁谁写', '这是一个很有诚意的提示~~', {
        confirmButtonText: '确定'
      })
    }
  }
}
</script>
<style>
  #login{
    background:url('../assets/timg.jpg');
    width:100%;
  height:100%;
  position:fixed;
    background-size:100% 100%;
  }
  .login-windows{
    position: absolute;
    width: 20%;
    height: 30%;
    top: 30%;
    left: 65%;
  }
</style>
