export //编写规则
const rules = {
  number: [
    {
      required: true,
      message: '请填写手机号',
      trigger: 'blur',
    },
    {
      pattern: /^[1]([3-9])[0-9]{9}$/,
      message: '手机号格式不正确',
      trigger: 'blur',
    },
  ],
  verify: [
    {
      required: true,
      message: '请填写验证码',
      trigger: 'blur',
    },
    {
      pattern: /^[0-9]{4}$/,
      message: '验证码格式不正确',
      trigger: 'blur',
    },
  ],
}
