<template>
  <div id="account">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item prop="name" label="账号">
        <el-input type="text" v-model="account.name" />
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input type="text" v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { rules } from '../config/account'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? '',
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (ispassword: boolean) => {
      //valuedata验证
      formRef.value?.validate((valid) => {
        if (valid) {
          //判断记住密码
          if (ispassword === true) {
            // 本地缓存
            console.log(true)

            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            console.log(false)
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          //开始登录验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return { account, rules, loginAction, formRef }
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
</style>
