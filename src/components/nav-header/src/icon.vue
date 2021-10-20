<template>
   <div class="icon">
          <i class="el-icon-chat-dot-round"></i>
          <i class="el-icon-collection-tag"></i>
          <i class="el-icon-bell"></i>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped lang="less">
    .icon i {
        margin-right: 20px;
        cursor: pointer;
      }
</style>