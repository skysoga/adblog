import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
const Api = {
  databaseUrl: 'http://192.168.16.110/cms/',
  searchUrl: 'http://192.168.16.110/cms/wSuggest.sp?code=utf-8&act=index',
  catalogUrl: 'http://192.168.16.110/cms/wNewsRecommend.sp?act=catas'
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