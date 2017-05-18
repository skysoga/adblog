import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
const Api = {
  databaseUrl: '/api/',
  searchUrl: '/api/wSuggest.sp?code=utf-8&act=index',
  catalogUrl: '/api/wNewsRecommend.sp?act=catas'
}

export function fetch (param) {
  var url = Api.databaseUrl + param
  return Vue.http.get(url).then(function (res) {
    return res.body
  })
}

export function fetchSearch (param) {
  var url = Api.searchUrl
  return Vue.http.get(url, param).then(function (res) {
    return res.body
  })
}

export function fetchCatalog () {
  var url = Api.catalogUrl
  return Vue.http.get(url).then(function (res) {
    return res.body
  })
}