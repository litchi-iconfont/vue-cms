import { createStore, Store, useStore as aysStore } from 'vuex'
import { IRootState, IStoreType } from './types'
//注册组件
import login from './login/login'
import system from './mian/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'ays',
      age: 18,
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login,system
  },
})

export function setupState() {
  store.dispatch('login/loadLocalLogin')
}

// vuex里使用typescript
export function userStore(): Store<IStoreType> {
  return aysStore()
}

export default store
