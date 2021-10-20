<template>
  <div id="user">
    <div class="user-let-from">
      <!-- //Letfrom高级组件 -->
      <PageSearch :fromConfig="fromConfig" />
    </div>
    <div class="content">
      <LetTable :listData="propList" :userList="userList">
        <template #enable="scope">
          <el-button
            size="mini"
            :type="scope.row.enable ? 'success' : 'danger'"
            plain
            >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
          >
        </template>
        <template #createAt="scope" size="mini">{{
         $filters.formatTime(scope.row.createAt) 
        }}</template>
        <template #updateAt="scope" size="mini">{{
          $filters.formatTime(scope.row.updateAt)
        }}</template>
      </LetTable>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { fromConfig } from './config/user.config'
import PageSearch from '@/components/page-search/index'
import { useStore } from 'vuex'
import { propList } from './config/proplist.config'
import LetTable from '@/base-ui/table'

export default defineComponent({
  components: {
    PageSearch,
    LetTable,
  },
  name: 'user',
  setup() {
    const store = useStore()
    //提交数据到actions
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10,
      },
    })
    //用户列表信息
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    return { fromConfig, userList, propList }
  },
})
</script>

<style scoped lang="less">
.content {
  padding: 20px 60px;
  background-color: #fff;
  margin-top: 20px;
}
</style>
