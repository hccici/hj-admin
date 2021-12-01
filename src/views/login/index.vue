<template>
  <div>用户登陆</div>
  <el-form ref="loginFormRef" :rules="rules" :model="loginForm">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username">
        <template #prefix>
          <el-icon class="el-input__icon">
            <avatar />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password" :type="passwordType">
        <template #prefix>
          <el-icon class="el-input__icon">
            <avatar />
          </el-icon>
        </template>
        <template #suffix>
          <el-icon class="el-input__icon" @click="changePasswordType">
            <avatar v-if="passwordType === 'text'" />
            <house v-else></house>
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="loading" @click="login">提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup>
import { Avatar, House } from '@element-plus/icons'
import { ref } from 'vue'
import loginRules from './rules'
import { useStore } from 'vuex'
// 绑定数据及校验
const loginForm = ref({
  username: '',
  password: ''
})
const rules = ref(loginRules)
// 控制密码的样式
const passwordType = ref('password')
const changePasswordType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
// 处理登录逻辑
const loading = ref(false)
const loginFormRef = ref(null)
const store = useStore()
const login = () => {
  // 1、校验
  loginFormRef.value.validate(valid => {
    if (valid) {
      loading.value = true
      store.dispatch('user/login', loginForm.value)
    }
  })
}
</script>
<style lang="scss" scoped>
</style>
