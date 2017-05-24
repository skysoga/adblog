import {
  fetch,
  fetchArDetail,
  arUpdate
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
    fetchArDetail(article.id[0].value).then(function (res){
      commit('SET_ARTICLE', res)
    })
    
  },
  DATA_ISLOADED: ({ commit, state }, flags) => {
    commit('SET_FLAGS', flags)
  },
  ENSURE_CATAGORY: ({ commit, state }, catagory) =>{
    commit('SET_CATAGORY',catagory)
  },
  UPDATE_ARTICLE: ({ commit, state }, form) =>{
    form.catagory = state.articleForm.catagory[0].caName
    form.caId = state.articleForm.catagory[0].caId
    console.log("ddddddddddddddddddddddddddddddddddddd", JSON.stringify(form))
    arUpdate( form)
  }
  
  
}
