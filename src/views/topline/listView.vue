<template>
  <div>
  	<div class="list-view" :class="{loading:loading}">
    <transition :name="transition">
      <div class="news-list">
      	<lg-checkbox-group v-model="arIds">
        	<transition-group tag="ul" name="item">
				<item v-for="(item, index) in itemList" :key="index" :item="item"></item>
        	</transition-group>
        </lg-checkbox-group>
        <div class="rel-info">
        	<a @click="selectAll">全选</a>
        	<a @click="arIds=[]">取消</a>
        	<a class="margin-t">删除</a>
        	<a class="margin-t" @click="openModal">批量</a>
        	<div class="list-nav">
		      <a v-if="page.currentPage > 1" class="button tiny" title="上一页" @click="prePage"><i class="fa fa-angle-double-left"></i></a>
		      <a v-else class="disabled button tiny"><i class="fa fa-angle-double-left"></i></a>
		      <a v-if="hasMore" class="button tiny" title="下一页" @click="nextPage"><i class="fa fa-angle-double-right"></i></a>
		      <a v-else class="disabled button tiny"><i class="fa fa-angle-double-right"></i> </a>
		    </div>
        </div>
        <div class="bottom"><span>{{ page.currentPage }}/</span>{{ page.pageCount }}</div>
      </div>
    </transition>
    <div class="spinner">
	  <div class="double-bounce1"></div>
	  <div class="double-bounce2"></div>
	</div>
  </div>
  <lg-reveal title="批量编辑" :open="visible" @revealOpen="handleOpen">
  	<div class="row" slot="body">
  		<div class="large-24 columns">
  			<div class="recommend">所选文章</div>
  			<ul class="info_list margin-t margin-b">
		  		<li v-for="(item, index) in selectTitle" :key="item">
		  			<span @click="removearTitle(index)">×</span>
		  			<a>.{{item}}</a></li>
		  	</ul>
		  	<div class="recommend margin-b">所属栏目</div>
		  	<div class="selected">
				<span v-for="(item, index) in getArCatalog()" :key="index" class="lg-tag">{{item.caName}}<i @click="deleteCaId(index)">×</i></span>
			</div>
		  	<div class="recommend">所有栏目</div>
		  	<lg-checkbox-group v-model="sIds" class="modalTree">
				<lg-tree :data="catalogTree" :props="props"></lg-tree>
			</lg-checkbox-group>
  		</div>
  	</div>
  	<div class="reveal-footer" slot="footer">
		<div class="row">
			<div class="small-24 columns text-right padding-t">
				<a class="button hollow radius secondary small"> 取 消 </a>
				<a class="small button radius"> 提 交 </a>
			</div>
		</div>
	</div>
  </lg-reveal>
  </div>
</template>
<script>
import Item from './list'
import { mapState } from 'vuex'
import LgCheckboxGroup from '@/components/checkbox-group'
import LgReveal from '@/components/reveal'
import LgTree from '@/components/Tree'
export default {
  name: 'item-list',
  props: {
    type: String
  },

  data () {
    return {
      loading: false,
      transition: 'slide-right',
      isIndeterminate: true,
      checkAll: true,
      checkedItems: [],
      arIds: [],
      arTitle: {},
      selectTitle: {},
      visible: false,
      catalogTree: [],
      mapCatalogs: {},
      sIds: [],
      props: {
        id: 'caId',
        label: 'caName',
        children: 'children',
        showCheckbox: true
      },
      catalogUrl: 'http://localhost/cms/wNewsRecommend.sp?act=catas'
    }
  },

  computed: {
    ...mapState({
      loaded: state =>state.flags,
      itemList: state => state.items,
      page: state => state.page,
      currUrl: state => state.currUrl
    }),
    hasMore () {
      return this.page.currentPage < this.page.pageCount
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.loading = true
      this.$store.dispatch('FETCH_LIST_DATA', 'wNewsRecommend.sp?act=search')
      this.getCatalog()
      this.arTitle = new Map()
    })
  },
  watch: {
    arIds () {
      for (let i of this.itemList) {
        this.arTitle.set(i.id[0].value, i.title[0].value)
      }
    },
    itemList () {
       this.isload()
    }
  },
  methods: {
    getCatalog () {
      this.$http.get(this.catalogUrl).then(function (res) {
        this.mapCatalogs = res.body.mapCatalogs
        this.catalogTree = res.body.catalogTree
      })
    },
    getArCatalog () {
      var arr = []
      for (let d of this.sIds) {
        arr.push(this.mapCatalogs[d])
      }
      return arr
    },
    deleteCaId (i) {
      this.sIds.splice(i, 1)
    },
    prePage () {
      console.log('上一页')
      this.transition = 'slide-right'
      var n = this.page.currentPage - 1
      var param = this.currUrl + '&n=' + n
      this.loadItems(param)
    },
    nextPage () {
      console.log('下')
      this.transition = 'slide-left'
      var n = this.page.currentPage + 1
      var param = this.currUrl + '&n=' + n
      this.loadItems(param)
    },
    loadItems (param) {
      this.loading = true
      this.$store.dispatch('FETCH_LIST_DATA', param)
    },
    isload () {
      if (this.loaded) {
        this.loading = false
        this.$store.dispatch('DATA_ISLOADED', false)
      }
    },
    selectAll () {
      var arr = []
      for (let item of this.itemList) {
        arr.push(item.id[0].convertedValue)
      }
      this.arIds = arr
    },
    handleOpen (flag) {
      this.visible = flag
    },
    openModal () {
      this.visible = true
      this.selectTitle = {}
      this.getArtitle()
    },
    getArtitle () {
      console.log('dd')
      for (let i=0; i < this.arIds.length; i++) {
        this.selectTitle[this.arIds[i]] = this.arTitle.get(this.arIds[i])
      }
    },
    removearTitle (i) {
      this.getArtitle()
      this.arIds.splice(this.arIds.indexOf(i), 1)
      this.selectTitle = {}
      this.getArtitle()
    }
  },
  components: {
    Item,
    LgCheckboxGroup,
    LgReveal,
    LgTree
  }
}
</script>
<style>
	.list-view{padding: 1rem 1rem 0 1rem;}
	.list-nav{
		padding: 15px 0;
	    text-align: center;
	    background: #FFF3D9;
	}
	.rel-info{
	    display: block;
	    height: calc(100% - 16px);
	    width: 32px;
	    padding: 10px 0;
	    position: absolute;
	    background: #e3e3e3;
	    z-index: 1;
	    right: 0;
	    top: 1rem;
	    box-shadow: 5px 0px 49px rgba(9, 9, 9, 0.3);
	}
	/*rel-info*/
	.news-list .bottom {
		position: absolute;
	    bottom: 0;
	    width: calc(100% - 70px);
	    text-align: center;
	    background: rgba(255,255,255,.7);
	}
	.rel-info .list-nav{
		background: none;
	    position: absolute;
	    top: 50%;
	    left: 0;
	    margin: 0 auto;
	    margin-top: -30px;
	    width: 24px;
	    right: 0;
	}
	.slide-left-enter, .slide-right-leave-to{
	  opacity: 0;
	  transform: translate(30px, 0);
	}
	.slide-left-leave-to, .slide-right-enter{
	  opacity: 0;
	  transform: translate(-30px, 0);
	}
	.item-move, .item-enter-active, .item-leave-active{
	  transition: all .5s cubic-bezier(.55,0,.1,1);
	}
	.item-enter{
	  opacity: 0;
	  transform: translate(30px, 0);
	}
	.item-leave-active{
	  position: absolute;
	  opacity: 0;
	  transform: translate(30px, 0);
	}
	.info_list li a {
	    width: calc(100% - 42px);
	}
	.modalTree{padding: 1rem 0;height: 200px;overflow: auto;}
</style>
