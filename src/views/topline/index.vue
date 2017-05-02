<template>
	<div class="">
      <lg-header></lg-header>
      <search-level></search-level>
      <list-view></list-view>
	</div>
</template>
<script>
import searchLevel from './searchLevel'
import listView from './listView'
import LgHeader from '../../components/header'
export default {
  data () {
    return {}
  },
  components: {
    searchLevel,
    listView,
    LgHeader
  },
  methods: {
  }
}
</script>
<style scoped="">
	.search, .list-view, .detail, .edit{height: calc(100vh - 64px);padding: 20px 1rem}
	.search{width: 15%;float: left;display: inline-block;}
	.list-view{width:85%;float: left;display: inline-block;}
	/*.detail{width:30%;float: left;display: inline-block;}
	.edit{width:30%;float: left;display: inline-block;}*/
</style>
