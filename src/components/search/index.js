/**
 * Created by Administrator on 2017/4/29.
 */
import Search from './src/search'

Search.install = (Vue) => {
  Vue.component('lg-tree', Search)
}

export default Search
