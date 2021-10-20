<template>
  <div class="dropdown">
    <el-dropdown class="el-dropdown">
      <span class="dropdown-top">
        <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu class="el-dropdown-menu">
          <el-dropdown-item class="el-dropdown-item">用户信息</el-dropdown-item>
          <el-dropdown-item class="el-dropdown-item">商品中心</el-dropdown-item>
          <el-dropdown-item class="el-dropdown-item">系统管理</el-dropdown-item>
          <el-dropdown-item class="el-dropdown-item">系统总览</el-dropdown-item>
          <el-dropdown-item class="el-dropdown-item">随便聊聊</el-dropdown-item>
          <el-dropdown-item class="el-dropdown-item">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { userStore } from '@/store/index'

export default defineComponent({
  setup() {
    const store = userStore()
    const name = computed(() => store.state.login.userInfo.name)
    return {
      name,
    }
  },
})
</script>

<style scoped lang="less">
.el-dropdown {
  .dropdown-top {
    display: flex;
    align-items: center;
    cursor: pointer;
    .icon i {margin-right: 10px;}
    span {
      margin-left: 10px;
    }
    
  }

  .solid {
    width: 30px;
    height: 30px;
    line-height: 48px;
  }
}
.el-dropdown .el-button {
  border: 0;
  background-color: transparent;
  color: #303133;
}
</style>
