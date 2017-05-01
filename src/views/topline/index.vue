<template>
	<div class="">
      <lg-header></lg-header>
      <search-level></search-level>
      <list></list>
      <detail></detail>
      <edit></edit>
    <button v-on:click="get()">he</button>
	</div>
</template>
<script>
import searchLevel from './searchLevel'
import list from './list'
import detail from './detail'
import edit from './edit'
import LgHeader from '../../components/header'
export default {
  data () {
    return {}
  },
  components: {
    searchLevel,
    list,
    detail,
    edit,
    LgHeader
  },
  methods: {
    get () {
      console.log(this.$http)
    }
  }
}
</script>
<style scoped="">
	.search, .list, .detail, .edit{height: calc(100vh - 64px);padding: 20px 1rem}
	.search{width: 15%;float: left;display: inline-block;}
	.list{width:25%;float: left;display: inline-block;}
	.detail{width:30%;float: left;display: inline-block;}
	.edit{width:30%;float: left;display: inline-block;}
</style>
