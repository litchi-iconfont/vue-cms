<template>
  <div id="account">
    <el-form :rules="rules" :model="phone">
      <el-form-item prop="number" label="手机号">
        <el-input type="text" v-model="phone.number" />
      </el-form-item>
      <el-form-item prop="verify" label="验证码">
        <div class="verify">
          <el-input type="text" v-model="phone.verify" />
          <el-button type="danger" class="verify-bt">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      verify: '',
    })
    return { phone, rules }
  },
})
</script>

<style scoped lang="less">
#account {
  el-form-item {
    text-align: center;
    margin: 15px 0;
    span {
      padding-right: 10px;
      color: #606266;
    }
    el-input {
      height: 20px;
      padding: 5px;
      border: 1px solid #606266;
      outline: none;
    }
    el-input:focus {
      border: 1px solid #f56c6c;
    }
  }
}
.verify {
  display: flex;
  .verify-bt {
    margin-left: 8px;
  }
}
</style>
