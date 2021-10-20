<template>
  <el-breadcrumb separator="/">
  <template v-for="item in breadcrumb" :key="item.name">
      <el-breadcrumb-item :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
  </template>
</el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcurmub } from './types/dome'

export default defineComponent({
  props: {
    breadcrumb: {
      type: Array as PropType<IBreadcurmub[]>,
      default: () => [],
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="less"></style>
