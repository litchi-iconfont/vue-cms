<template>
  <div class="login-bance">
    <div class="title">
      <div class="hd">
        <span>用户登录</span>
        <span>Login User</span>
      </div>
      <div class="to">---欢迎登录用户系统管理---</div>
      <!-- //login-tab -->

      <el-tabs
        type="border-card"
        class="tab"
        stretch="true"
        v-model="currentTab"
      >
        <el-tab-pane name="account">
          <template #label>
            <span><i class="el-icon-user-solid"></i>账号登录</span>
          </template>
          <Account ref="accountRef" />
        </el-tab-pane>

        <el-tab-pane name="phone">
          <template #label>
            <span><i class="el-icon-mobile-phone"></i>手机登录</span>
          </template>
          <Phone ref="phoneRef" />
        </el-tab-pane>
      </el-tabs>

      <div class="account-control">
        <el-checkbox
          label="记住密码"
          v-model="isPassword"
          class="checked"
        ></el-checkbox>
        <el-link type="danger">忘记密码</el-link>
      </div>

      <div class="drean">
        <el-button type="danger" id="drean-bt" @click="dreanLogin"
          >立即登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Phone from './login-phone.vue'
import Account from './login-accountt.vue'

export default defineComponent({
  components: {
    Account,
    Phone,
  },
  setup() {
    //定义属性
    const isPassword = ref(true)
    const accountRef = ref<InstanceType<typeof Account>>()
    const phoneRef = ref<InstanceType<typeof Phone>>()
    const currentTab = ref('account')

    //登录按钮
    const dreanLogin = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isPassword.value)
      }else {

      }
    }

    return {
      isPassword,
      dreanLogin,
      accountRef,phoneRef,
      currentTab,
    }
  },
})
</script>

<style scoped lang="less">
.login-bance {
  display: flex;
  width: 366px;
  //   height: 500px;
  background-color: rgba(255, 255, 255, 0.7);
  .title {
    width: 100%;
    margin-bottom: 35px;
    .hd {
      display: flex;
      margin-top: 35px;
      margin-bottom: 15px;
      justify-content: center;
      & span:nth-child(1) {
        font-size: 24px;
        font-weight: 700;
        color: #f56c6c;
      }

      & span:nth-child(2) {
        padding-top: 10px;
        padding-left: 10px;
        font-size: 12px;
        font-weight: 700;
        color: #909399;
      }
    }
    .to {
      font-weight: 700;
      font-size: 18px;
      color: #606266;
      text-align: center;
    }
    .tab {
      width: 320px;
      margin: 0 auto;
      box-shadow: none;
      margin-top: 15px;
      .el-icon-user-solid,
      .el-icon-mobile-phone {
        color: #f56c6c;
        margin-right: 6px;
      }
      span {
        font-weight: 600;
        color: #606266;
      }
    }
    .account-control {
      display: flex;
      justify-content: space-around;
      .checkbox-me:checked {
        color: #f56c6c;
      }
    }
    .drean {
      display: flex;
      justify-content: center;
      width: 100%;
      margin: 0 auto;
      #drean-bt {
        width: 320px;
      }
    }
  }
}
</style>
<style lang="less">
.el-checkbox__input.is-checked + .el-checkbox__label {
  outline: none !important;
  color: #f56c6c !important;
}
.el-checkbox__input.is-checked .el-checkbox__inner {
  color: #f56c6c !important;
  border: 0 !important;
  background-color: #f56c6c !important;
}
</style>
