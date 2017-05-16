import {
  fetch
} from '../api'

export default {
  // ensure data for rendering given list type
  FETCH_LIST_DATA: ({ commit, state }, param) => {
    fetch(param).then(function (res) {
      var data = res.result.articleList
      var treeData = res.catalogTree
      var sourceData = res.result.facetModelList.splice(1, res.result.facetModelList.length)
      var page = res.result.page
      var currUrl = res.result.currFilterUrl
      var filters = res.result.filterParamMap
      commit('SET_ITEMS', { data })
      commit('SET_TREEDATA', { treeData })
      commit('SET_SOURCEDATA', { sourceData })
      commit('SET_PAGE', { page })
      commit('SET_CURRURL', currUrl)
      commit('SET_FILTERS', filters)
    })
  },
  ENSURE_ARTICLE: ({ commit, state }, article) => {
    console.log('actions')
    console.log(article)
    commit('SET_ARTICLE', article)
  },
  DATA_ISLOADED: ({ commit, state }, flags) => {
    commit('SET_FLAGS', flags)
  }
}
