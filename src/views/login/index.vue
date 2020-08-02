<template>
  <div class="header">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
     <el-form-item label="用户名" prop="username">
        <el-input type="password" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">提交</el-button>
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
  Watch,
} from "vue-property-decorator";
import {validateUser, validatePassword} from '../../validate/index';
import {Form} from 'element-ui';
@Component
export default class Login extends Vue {

    /**
     * 登录表单，双向绑定
     */
    private loginForm = {
        username: '',
        password: '',
    };

    /**
     * 验证规则
     */
    private rules = {
        username: [{validator: validateUser, trigger: 'blur'}],
        password: [{validator: validatePassword, trigger: 'blur'}],
    }

    /**
     * 登录方法
     */
    login () {
        (this.$refs.loginForm as Form).validate(
            async(valid: boolean) => {
                if (valid) {

                }
            }
        );
    }
}
</script>

<style scoped>
</style>