<template>
  <li v-if="item" :data-id="item.id[0].convertedValue">
  	<div class="score"></div>
  	<lg-checkbox :label="item.id[0].convertedValue">{{''}}</lg-checkbox>
    <div class="title" @click="fetchArticle(item)">
	    <a target="_blank" :title="item.title[0].value">{{ item.title[0].value }}</a>
    </div>
    <div class="meta margin-t4">
    	<span class="warning-color">{{item.curCatalog[0].convertedValue}}</span>
  		<span class="author primary-color">
          {{ item.author[0].value }}
        </span>
        <a class="ogSite info-color">{{item.source[0].value}}</a>
    	<span class="time">
	    	{{ item.pubDate[0].value | dateTime }} 
		</span>
  	</div>
    <div class="tags margin-t4">
      <i class="fa fa-tags"></i>
      <span class="tag" v-for="(item, key, i) in item.SM_tags" :key="i">
	    {{key}}:{{item.value}}
	  </span>
    </div>
  </li>
</template>
<script>
import LgCheckbox from '../../components/checkbox'
import { dateTime } from '../../utils/filters'
export default {
  data () {
    return {
      checked: false
    }
  },
  props: {
    item: {}
  },
  methods: {
    fetchArticle (item) {
      console.log('article', item)
      this.$store.dispatch('ENSURE_ARTICLE', item)
    }
  },
  components: {
    LgCheckbox,
    dateTime
  }
}
</script>
<style>
	.news-list{height: calc(100vh - 95px);overflow-y: auto;padding: 10px 20px 20px;
    background: #fff; min-height: calc(100vh - 95px);}
	.news-list ul{margin: 0;padding: 0;}
	.news-list ul li{
		background-color: #fff;
	    padding: 10px 10px 10px 60px;
	    border-bottom: 1px solid #eee;
	    position: relative;
	    line-height: 20px;
	    list-style: none;
	}
	.news-list .lg-checkbox {
		position: absolute;
	    right: -10px;
	    bottom: 10px;
	}
	.news-list .score {
	    color: #828d95;
	    font-size: 1.1em;
	    font-weight: 700;
	    position: absolute;
	    top: 6px;
	    left: 10px;
	    height: 2rem;
	    width: 2rem;
	    line-height: 2rem;
	    text-align: center;
	    border: 2px solid #828d95;
	    border-radius: 50%;
	}
	.news-list .title a{
	    /*white-space: nowrap;*/
	    text-overflow: ellipsis;
	    overflow: hidden;
	    margin: 0;
	    display: inline-block;
	    font-weight: 600;
	    padding-right: 10px;
	}
	.ogSite{margin-right: 10px;font-size: 0.875rem;color: @primary-color;}
	.meta span{color: rgba(0, 0, 0, 0.54118);font-size: 0.875rem;margin-right: 10px;}
	.tags .tag{color: @secondary-color;font-size: 12px;margin-right: 10px;}
</style>
