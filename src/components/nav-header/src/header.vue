<template>
  <div id="nav-header">
    <i
      class="fold"
      @click="foldChange"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
    ></i>
    <div class="content">
      <div class="nav">
        <LetBreadcrumb :breadcrumb="breadcrumb" />
      </div>
      <div class="user">
        <!-- 图标 -->
        <Icon />
        <!-- 用户信息 -->
        <DropdownNav />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import DropdownNav from './dropdown-nav.vue'
import Icon from './icon.vue'
import LetBreadcrumb from '@/base-ui/breadcrumb/index'
import { IBreadcurmub } from '@/base-ui/breadcrumb/src/types/dome'
import { pathMapBreadcumbs } from '@/utils/map-menus'
import { userStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    DropdownNav,
    Icon,
    LetBreadcrumb,
  },

  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const foldChange = () => {
      isFold.value = !isFold.value
      //导出属性
      emit('foldChange', isFold.value)
    }
    //面包屑数据

    const store = userStore()
    const breadcrumb = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcumbs(userMenus, currentPath)
    })

    return { foldChange, isFold, breadcrumb }
  },
})
</script>

<style scoped lang="less">
#nav-header {
  display: flex;
  width: 100%;
  .fold {
    font-size: 28px;
    cursor: pointer;
    margin: auto 0;
  }
  .content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin: auto 10px;
    .nav {
      margin: auto 0;
    }
  }
  .user {
    display: flex;
    align-items: center;
  }
}
</style>
