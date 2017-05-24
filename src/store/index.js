import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      flags: false,
      page: {},
      currUrl: '',
      filterParamMap: {},
      treeData: [],
      sourceData: [],
      catalog: null,
      article: {},
      items: {},
      articleForm: {
        catagory:"",
        tag:[],
        manualScore:0.0,
        id:""
      }
    },
    actions,
    mutations,
    getters
  })
}
