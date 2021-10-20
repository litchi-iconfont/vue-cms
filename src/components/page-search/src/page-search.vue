<template>
  <div id="page-seach">
    <LetForm v-bind="fromConfig" v-model="formDate" class="user-let-from">
      <template #header>
        <h2 class="color">高级检索</h2>
      </template>
      <template #footer>
        <div class="user-footer">
          <el-button type="primary" icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </LetForm>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import LetForm from '@/base-ui/from'

export default defineComponent({
    props:{
        fromConfig:{
            type:Object,defualt:()=>[],required:true
        }
    },
    components:{
       LetForm 
    },
  setup() {
        //数据的实时绑定
    const formDate = ref({
      name: '',
      id: '',
      password: '',
      sport: '',
      createTime: '',
    })

    return {
        formDate
    }
  },
})
</script>

<style scoped lang="less">
 .user-let-from {
    background-color: #fff;
    padding: 22px 60px 22px 60px;
    .color {
      color: #606266;
    }
    .user-footer {
      text-align: right;
      margin-right: 20px;
    }
  }</style>
