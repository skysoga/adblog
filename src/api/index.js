import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
const Api = {
  databaseUrl: '/api/',
  searchUrl: '/api/wSuggest.sp?code=utf-8&act=index',
  catalogUrl: '/api/wNewsRecommend.sp?act=catas',
  argetUrl:'/HWEB/item/get?biz_code=headlines&iid=',
  arupdateUrl:'/HWEB/item/update',
  arCatalogRecUrl:'/HWEB/rec/classify'
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

export function fetchArDetail (param) {
  var uri=Api.argetUrl+param
  return Vue.http.get(uri).then(function (res) {
    console.log(res.body)
    return res.body
  })
}

export function arUpdate (param) {
  var uri=Api.arupdateUrl
  return Vue.http.post(uri, param).then(function (res) {
	console.log(res.body)
    return res.body
  })
  }
  
export function arCatalogRec (param) {
  var uri=Api.arCatalogRecUrl
  return Vue.http.post(uri, param).then(function (res){
      console.log(res.body)
  return res.body
  })
}
  
