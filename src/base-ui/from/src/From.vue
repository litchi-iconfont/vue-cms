<template>
  <div id="let-from">
      <!-- //上插槽 -->
      <div class="header">
          <slot name="header"></slot>
      </div>
      <!-- 内容区 -->
    <el-form label-width="100px">
      <el-row class="el-row">
        <template v-for="item in fromItems" :key="item.lable">
            <!-- colLayout 自适应 -->
          <el-col v-bind="colLayout">
              <!-- label 显示在左边的文字 rules 验证规则 -->
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              class="el-form-item"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formDate[`${item.field}`]"
                ></el-input>
              </template>

              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width:100%"
                  v-model="formDate[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}
                  </el-option>
                </el-select>
              </template>

              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width:100%"
                  placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  v-model="formDate[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <!-- 下插槽 -->
    <div class="footer">
          <slot name="footer"></slot>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref ,watch} from 'vue'
import { IFromItem } from '@/base-ui/from'

export default defineComponent({
    // 接收数据
  props: {
    modelValue: { type: Object, required: true },
    // config 配置文件
    fromItems: {
      type: Array as PropType<IFromItem[]>,
      default: () => [],
    },
    labelWidth: {
      type: String,
      default: '100px',
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' }),
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24,
      }),
    },
  },
  emits: ['update:modelValue'],
  setup(props,{emit}) {
    const formDate = ref({ ...props.modelValue })
    watch(formDate,(newValue)=>emit('update:modelValue',newValue),{deep:true})
    return {
      formDate,
    }
  },
})
</script>

<style scoped lang="less">
#user {
  background-color: #fff;
}
</style>
