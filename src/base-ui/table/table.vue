<template>
  <el-table :data="userList" border style="width: 100%">
    <template v-for="item in listData" :key="item.prop">
      <el-table-column v-bind="item" align="center" size="mini">
          <template #default="scope">
              <slot :name="item.slotName" :row="scope.row">{{scope.row[item.prop]}}</slot>
          </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    userList: {
      type: Object,
      default: () => [],
    },
     listData: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return {
    }
  },
})
</script>

<style scoped lang="less"></style>
