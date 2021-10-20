type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFromItem {
  field: string
  label: string
  rules?: any
  placeholder?: any
  type: IFormType
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  fromItems: IFromItem[]
  labelWidth?: any
  colLayout?: any
}
