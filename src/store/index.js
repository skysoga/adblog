import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      page: {},
      currUrl: '',
      filterParamMap: {},
      treeData: [],
      sourceData: [],
      catalog: null,
      article: {},
      items: {}
    },
    actions,
    mutations,
    getters
  })
}
