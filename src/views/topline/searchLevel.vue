<template>
	<div class="search">
    <div class="row">
      <div class="large-24 columns">
      	<div class="title">栏目</div>
        <lg-tree :data="treeData" href='aaa'></lg-tree>
      </div>
    </div>
  </div>
</template>
<script>
import LgTree from '../../components/Tree'
var data = [
  {
    'name': '科技',
    'href': 'aaa',
    children: [
      {
        'name': '智能机器人',
        'href': 'bbb'
      },
      {
        'name': '智能家居',
        'href': 'ccc',
        children: [
          {'name': '智能烧吧',
            'href': 'asdf'}
        ]
      }
    ]
  },
  {
    'name': '科技1',
    'href': 'DDD',
    children: [
      {
        'name': '智能机器人1',
        'href': 'eee'
      },
      {
        'name': '智能家居1',
        'href': 'fff',
        children: [
          {
            'name': '智能烧吧1',
            'href': 'ggg'
          }
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
