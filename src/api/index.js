import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
const api = {
  databaseUrl: 'http://localhost/cms/',
  searchUrl: 'http://localhost/cms/wSuggest.sp?code=utf-8&act=index'
}

export function fetch (param) {
  var url = api.databaseUrl + param
  return Vue.http.get(url).then(function (res) {
    return res.body
  })
}

