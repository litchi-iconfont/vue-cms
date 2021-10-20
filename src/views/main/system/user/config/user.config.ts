import { IForm } from '@/base-ui/from/types/index'

export const fromConfig: IForm = {
  labelWidth: '100px',
  fromItems: [
    {
      field: 'name',
      label: '用户名',
      placeholder: '请输入用户名',
      type: 'input',
    },
    {
      field: 'id',
      label: 'id',
      placeholder: '请输入ID',
      type: 'input',
    },
    {
      field: 'password',
      label: '密码',
      placeholder: '请输入密码',
      type: 'password',
    },
    {
        field: 'sport',
        type: 'select',
        label: '喜欢的运动',
        placeholder: '请选择喜欢的运动',
        options: [
          { title: '篮球', value: 'basketball' },
          { title: '足球', value: 'football' }
        ]
      },
    {
      field: 'createTime',
      label: '创建的时间',
      placeholder: '请选择创建的时间',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange',
      },
    },
  ],
}
