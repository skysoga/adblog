<template>
  <div class="tree">
    <ul>
      <tree-node
        v-for='(item, index) in data'
        :model="item"
        base="0"
        :key="index"
      ></tree-node>
    </ul>
  </div>
</template>
<script>
  import TreeNode from './treeNode.vue'
  export default {
    name: 'tree',
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        open: false
      }
    },
    mounted () {
      console.log(this.data)
    },
    components: {
      TreeNode
    }
  }
</script>
<style>
  .tree ul{margin: 0;padding:0;}
  .tree ul li{list-style: none;}
</style>
