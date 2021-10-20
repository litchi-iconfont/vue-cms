<template>
  <div id="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="" />
      <span class="title" v-if="!collapse">Vue3+Ts</span>
    </div>
    <!-- nav -->
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      :unique-opened="true"
      background-color="#001529"
      text-color="#909399"
      active-text-color="#fff"
      :collapse="collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单可以展示的标题 -->
          <el-sub-menu
            :index="item.id + ''"
            :class="collapse ? '' : 'nav-menu-width'"
          >
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="submenu in item.children" :key="submenu.id">
              <el-menu-item
                :index="submenu.id + ''"
                @click="handleMenuItemClick(submenu)"
              >
                <i v-if="submenu.icon" :class="submenu.icon"></i>
                <span>{{ submenu.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单打情况下 -->
        <template v-else>
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { userStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    //   store
    const store = userStore()
    const userMenus = computed(() => store.state.login.userMenus)
    //router
    const router = useRouter()
    //当前路由对象
    const route = useRoute()
    //data
    const currentPath = route.path
    const menu = pathMapToMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.id+'')

    //event handle
    const handleMenuItemClick = (item: any) => {
      console.log(item)
      router.push({
        path: item.url ?? '/not-found',
      })
    }

    return {
      userMenus,
      handleMenuItemClick,
      defaultValue,
    }
  },
})
</script>

<style scoped lang="less">
#nav-menu {
  background-color: #001529;
  border: 0;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 12px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    display: flex;
    flex-direction: column-reverse;
    border-right: none;
    .nav-menu-width {
      width: 210px;
    }
    .nav-menu-width-fold {
      width: 60px;
    }
    .fold-210 {
      width: 210px;
    }
    .fold-60 {
      width: 60px;
    }
  }
}
</style>
