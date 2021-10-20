import { Module } from 'vuex'
import { IRootState } from '../types'
import {
  accountLoginRequest,
  requestUserById,
  requestUserMenusByRoleId,
} from '@/service/login/login'
import localCacle from '@/utils/cache'
import router from '@/router/router'
import { mapMenusToRoutes } from '@/utils/map-menus'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
    }
  },
  //修改state数据
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    chaneUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    chaneUserMenus(state, userMenus) {
      state.userMenus = userMenus
      // usermenus=>routes
      const routes = mapMenusToRoutes(userMenus)
      console.log(routes);
      
      //将routes=>router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    },
  },
  actions: {
    //账户登录
    async accountLoginAction({ commit }, palyLoad: any) {
      //实现登录逻辑
      const loginResult = await accountLoginRequest(palyLoad)
      //   console.log(loginResult);

      const { id, token } = loginResult.data
      //   console.log(id,token);

      //获取token
      commit('changeToken', token)
      localCacle.setCache('token', token)
      //请求用户信息的数据
      const userInfoResult = await requestUserById(id)

      const userInfo = userInfoResult.data
      console.log(userInfo)
      commit('chaneUserInfo', userInfo)
      localCacle.setCache('userInfo', userInfo)
      //请求用户菜单
      const userMenusRequest = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusRequest.data
      console.log(userMenus)
      commit('chaneUserMenus', userMenus)
      localCacle.setCache('userMenus', userMenus)
      //跳转首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCacle.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCacle.getCache('userInfo')
      if (userInfo) {
        commit('chaneUserInfo', userInfo)
      }
      const userMenus = localCacle.getCache('userMenus')
      if (userMenus) {
        commit('chaneUserMenus', userMenus)
      }
    },
    //手机号登录
    // phoneLoginAction({ commit }, palyLoad: any) {
    //   console.log('PhoneLoginAction', palyLoad)
    // },
  },
  modules: {},
}

export default loginModule
