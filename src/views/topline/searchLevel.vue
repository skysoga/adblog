<template>
	<div class="search">
    <div class="row">
      <div class="large-24 columns">
        <lg-tree :data="treeData"></lg-tree>
      </div>
    </div>
  </div>
</template>
<script>
import LgTree from '../../components/Tree/src/tree.vue'
var data = [
  {
    'name': '科技',
    children: [
      {'name': '智能机器人'},
      {
        'name': '智能家居',
        children: [
          {'name': '智能烧吧'}
        ]
      }
    ]
  },
  {
    'name': '科技1',
    children: [
      {'name': '智能机器人1'},
      {
        'name': '智能家居1',
        children: [
          {'name': '智能烧吧1'}
        ]
      }
    ]
  }
]
export default {
  data () {
    return {
      treeData: data
    }
  },
  components: {
    LgTree
  }
}
</script>
