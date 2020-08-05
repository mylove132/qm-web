<template>
  <div class="header">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px">
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" placeholder="please enter the erp" ref="username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="please enter the password" ref="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch
} from "vue-property-decorator";
import { validateUser, validatePassword } from "../../validate/index";
import { Form as ElForm, Input } from 'element-ui'
import { UserModule } from "../../store/modules/user";
@Component
export default class Login extends Vue {
  private loading = false;
  /**
   * 登录表单，双向绑定
   */
  private loginForm = {
    username: "",
    password: ""
  };

  /**
   * 验证规则
   */
  private rules = {
    username: [{ validator: validateUser, trigger: "blur" }],
    password: [{ validator: validatePassword, trigger: "blur" }]
  };

  /**
   * 判断用户名密码是否为空获取焦点
   */
  mounted() {
    if (this.loginForm.username === "") {
      (this.$refs.username as Input).focus();
    } else if (this.loginForm.password === "") {
      (this.$refs.password as Input).focus();
    }
  }

  /**
   * 登录方法
   */
  login() {
    (this.$refs.loginForm as ElForm).validate(async (valid: boolean) => {
      if (valid) {
        this.loading = true;
        await UserModule.Login(this.loginForm);
        this.$router.push({
          path: "/"
        });
      }
    });
  }
}
</script>

<style lang='scss' scoped>
    .header {
      height: 300px;
      width: 450px;
      padding-top: 100px;
      border-radius: 5px;
      background-color: #394f62;
      position:absolute;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%);
      div {
        margin-right: 10px;
        margin-left: -30px;
      }
    }
</style>