import { createStore } from 'vuex'
import appStore from "./moduls/app";


// 调用createStore
export default createStore({
  state: {
    info: 'hello'
  },
  mutations: {
    // 定义mutations，用于修改状态(同步)
    updateInfo(state, payload) {
      state.info = payload
    }
  },
  actions: {
    // 定义actions，用于修改状态(异步)
    // 2秒后更新状态
    updateInfo(context, payload) {
      setTimeout(() => {
        context.commit('updateInfo', payload)
      }, 1000)
    }

  },
  getters: {
    // 定义一个getters
    formatInfo(state) {
      //getters的方法
      return state.info + ' Tom'
    }
  },
  modules: {
  }
})
