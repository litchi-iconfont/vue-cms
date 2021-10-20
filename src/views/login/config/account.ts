//编写规则
export const rules = {
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur',
    },
    {
      pattern: /^[a-zA-Z][a-zA-Z0-9_]{2,8}$/,
      message: '用户名必须是3-9个字母或数字',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
    {
    //   pattern: /^[a-zA-Z]\w{5,17}$/,
      pattern: /^[A-Za-z0-9]+$/,
      message: '密码必须是以字母开头，6~18位，只能包含字母、数字和下划线',
      trigger: 'blur',
    },
  ],
}
