//store
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { PostPageListData } from '@/service/main/system/system'
import { pathMapToMenu } from '@/utils/map-menus'

export interface Isystem {
  userList: any[]
  userCount: number
}

const systemModule: Module<Isystem, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
    }
  },
  mutations: {
    changeUserList(state, userList) {
      state.userList = userList
    },
    changeUserCount(state,userCount){
        state.userCount=userCount
    }
  },
  actions: {
    //发送忘了请求
    async getPageListAction({ commit }, PlayLoad) {
      const pageRseult = await PostPageListData(
        PlayLoad.pageUrl,
        PlayLoad.queryInfo
      )
      console.log(pageRseult)
      const { list, totalCount } = pageRseult.data
      commit('changeUserList',list)
      commit('changeUserCount',totalCount)
    },
  },
}

export default systemModule
