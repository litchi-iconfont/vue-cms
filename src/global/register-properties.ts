import { App } from 'vue'
import {formatUtcString} from '@/utils/date-format'

export default function registerProperties(app: App) {
  //定义全局属性 改变时间格式
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    },
  }
}
