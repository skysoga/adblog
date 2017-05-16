export default {
  SET_PAGE: (state, { page }) => {
    state.page = page
  },
  SET_CURRURL: (state, currUrl) => {
    state.currUrl = currUrl
  },
  SET_FILTERS: (state, filters) => {
    state.filterParamMap = filters
  },
  SET_ITEMS: (state, items) => {
    state.items = items.data
    state.flags = true
  },
  SET_TREEDATA: (state, items) => {
    state.treeData = items.treeData
  },
  SET_SOURCEDATA: (state, items) => {
    state.sourceData = items.sourceData
  },
  SET_ARTICLE: (state, article) => {
    state.article = article
    console.log('mutations', state.article)
  },
  SET_FLAGS: (state, flags) => {
    state.flags = flags
  }
}
