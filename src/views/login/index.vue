<template>
  <div>用户登陆</div>
  <el-form :rules="rules" :model="loginForm">
    <el-form-item prop="name">
      <el-input v-model="loginForm.name">
        <template #prefix>
          <el-icon class="el-input__icon">
            <avatar />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password">
        <template #prefix>
          <el-icon class="el-input__icon">
            <avatar />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup>
import { Avatar } from '@element-plus/icons'
import { ref } from 'vue'
import loginRules from './rules'
const loginForm = ref({
  name: '',
  password: ''
})
const rules = ref(loginRules)
</script>
<style lang="scss" scoped>
</style>
