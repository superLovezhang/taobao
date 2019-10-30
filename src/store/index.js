import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchTag: false,
    goodsList: []
  },
  mutations: {
    changeSearch(state, args) {
      state.searchTag = args;
    },
    changeGoodsStatus(state, args) {
      state.goodsList = args;
    }
  },
  actions: {
  },
  modules: {
  }
})
