import Tree from './src/tree.vue'

/* istanbul ignore next */
Tree.install = (Vue) => {
  Vue.component('lg-tree', Tree)
}

export default Tree
