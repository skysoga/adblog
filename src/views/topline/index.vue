<template>
	<div class="">
      <lg-header></lg-header>
      <search-level></search-level>
      <list-view></list-view>
      <edit @openAr="openAr"></edit>
      <detail @closeAr="closeAr" :open="open"></detail>
	</div>
</template>
<script>
import LgHeader from '@/components/header'
import searchLevel from './searchLevel'
import listView from './listView'
import Edit from './edit'
import Detail from './detail'
export default {
  data () {
    return {
      open: false
    }
  },
  components: {
    LgHeader,
    searchLevel,
    listView,
    Edit,
    Detail
  },
  methods: {
    openAr (flag) {
      this.open = flag
    },
    closeAr (flag) {
      this.open = flag
    }
  }
}
</script>
<style>
	.search{height: calc(100vh - 60px);overflow-y: auto;}
	.search{width: 15%;float: left;display: inline-block;background: rgba(50,64,87,.8);}
	.list-view{width:45%;float: left;display: inline-block;position: relative;}
	/*.detail{width:30%;float: left;display: inline-block;}
	.edit{width:30%;float: left;display: inline-block;}*/
</style>
