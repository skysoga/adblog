<template>
  <div class="tree">
    <ul>
      <tree-node
        v-for='(item, index) in data'
        :model="item"
        :props="props"
        base="0"
        :key="item[props.id]"
        :title="item[props.id]"
        :icon="icon"
        :loading="loading"
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
      },
      props: {
        default () {
          return {
            id: 'value',
            children: 'children',
            label: 'label',
            icon: 'icon',
            hit: {
              type: Boolean,
              default: false
            },
            showCheckbox: {
              type: Boolean,
              default: false
            },
            Fun: {
              type: Function,
              default: null
            }
          }
        }
      },
      icon: {
        type: String,
        default: ''
      },
      loading: Boolean
    },
    data () {
      return {
        open: false
      }
    },
    mounted () {
    },
    components: {
      TreeNode
    }
  }
</script>
<style>
  .tree ul{margin: 0;padding:0;}
  .tree ul li{list-style: none;}
  .tree ul li div > i:nth-child(1){  
    cursor: pointer;
    display: inline-block;
    width: 10px;
    font-size: 1rem;
    text-align: center;}
  .fa-none{position: relative;z-index: -1;}
  .fa-none:before{
  	opacity: 0;
  }
</style>
