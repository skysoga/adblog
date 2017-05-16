<template>
	<div class="search">
		<div class="row" v-show="isShow">
			<div class="large-24 column">
				<div class="title">过滤条件</div>
				<ul class="act">
					<li v-for="(item, key, index) in filters" v-if='key != "sort"' @click="deleteFilter(item)">
						{{item[0].convertedValue}} <span aria-hidden="true">×</span>
					</li>
				</ul>
			</div>
		</div>
	    <div class="row catalog">
	      <div class="large-24 columns">
	      	<div class="title">栏目</div>
	        <lg-tree :data="treeData" :props="props" v-show="opens.open"></lg-tree>
	      </div>
	    </div>
	    <div class="row sourceTree" v-for="(items, index) in sourceData">
	      <div class="large-24 columns">
	      	<div class="title">{{items.facetTitle}}
	      		<span class="float-right" @click.prevent.stop="loadMore(items.facetFieldList, items.paramName)">展开</span>
	      	    <span class="float-right" @click.prevent.stop="slide(items.paramName)">收起</span>
	      	</div>
	        <div class="tree">
	        	<ul v-show="opens.open1">
		        	<li 
		        		v-for="(item, index) in list(items.facetFieldList, items.paramName)" 
		        		:key="index"
		        		@click="search(item)"
		        	>{{item.convertedValue}}</li>
		        </ul>
	        </div>
	      </div>
	    </div>
  	</div>
</template>
<script>
import { mapState } from 'vuex'
import LgTree from '../../components/Tree'
export default {
  data () {
    return {
      opens: {
        open: true,
        open1: true
      },
      isShow: false,
      limitNum: 5,
      limitNumauthor: 5,
      limitNumsource: 5,
      limitNumtime: 5,
      props: {
        id: 'value',
        label: 'convertedValue',
        children: 'children',
        Fun: (item) => {
          var param = item.url
          this.$store.dispatch('FETCH_LIST_DATA', param)
        },
        hit: true
      },
      props1: {
        id: 'value',
        label: 'convertedValue',
        children: 'children'
      }
    }
  },
  methods: {
    toggle (open) {
      this.open = !this.open
    },
    slide (type) {
      this['limitNum' + type] = this.limitNum
    },
    loadMore (items, type) {
      this['limitNum' + type] = items.length
    },
    deleteFilter (item) {
      var param = item[0].url
      this.$store.dispatch('FETCH_LIST_DATA', param)
    },
    list (items, type) {
      var num = this['limitNum' + type] || this.limitNum
      if (!this['limitNum' + type]) {
        this['limitNum' + type] = this.limitNum
      }
      return items.slice(0, num)
    },
    search (item) {
      var param = item.url
      this.$store.dispatch('FETCH_LIST_DATA', param)
    }
  },
  computed: {
    ...mapState({
      treeData: state => state.treeData,
      sourceData: state => state.sourceData,
      filters: state => state.filterParamMap
    })
  },
  watch: {
    filters: function () {
      if (Object.keys(this.filters).length > 1) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  },
  components: {
    LgTree
  }
}
</script>
<style>
	.search .title {font-size: 1rem;color:#F0F0F0;padding:10px 10px 4px 10px;border-bottom: 2px solid #fff;margin-bottom: 10px;}
	.search .catalog .tree{max-height: 170px;overflow: auto;}
	.search .tree li,.search .tree li a{color: #fff;}
	.act{margin-left: 1rem;}
	.act li {color: #fff;cursor: pointer;}
	.sourceTree .tree li {padding-left: 1rem;}
</style>

