//导入封装好的请求逻辑
import Request from '../index'
import { IAccount } from './type'

enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus='/role/'
}

//将account对象通过post传递到服务器
export function accountLoginRequest(account: IAccount) {
  return Request.post({
    url: LoginApi.AccountLogin,
    data: account,
  })
// return axios({
//     method:'POST',
//     url: LoginApi.AccountLogin,
//     data: account,
// })
}
//从服务器获取用户数据传入 id
export function requestUserById(id: number) {
  return Request.get({
    url: LoginApi.LoginUserInfo + id,
    showLoading:false
  })
// return axios({
//     method:'GET',
//     url: LoginApi.LoginUserInfo + id,
//     showLoading:false
// })
}
export function requestUserMenusByRoleId(id:number){
    return Request.get({
        url:LoginApi.UserMenus + id + '/menu',
        showLoading:false
    })
}
