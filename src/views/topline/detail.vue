<template>
	<div class="detail" :class="{open: arOpen()}">
		<a class="close" @click="closeAr()">×</a>
		<article class="content" :class="{compare: isCompare}">
			<h3>{{getArticle("title").value}}</h3>
			<div class="row">
				<div class="large-20 columns">
					<div class="transverse">
					  	<li class="clearfix">
							<div class="img"><img :src="getArticle('arThumb').value" :alt='getArticle("title").value'></div>
							<div class="content">
								<div>作者：<a href="#">{{getArticle('author').value}}</a></div>
								<div>来源：<a href="#">{{getArticle('source').value}}</a></div>
								<div>发布时间：<a href="#">{{getArticle('pubDate').value | dateTime}}</a></div>
								<div>标签：<span class="lg-tag" href="#" v-for="tag in article.SM_tags">{{tag.value}}</span></div>
							</div>
						</li>
					</div>
				</div>
				<div class="large-4 columns">
					<title>系统评分</title>
					<div class="warning-color" style="font-size: 24px;">4.0</div>
				</div>
			</div>
			<div class="article-con row">
			    <div class="large-24 columns">
			        {{getArticle('content').value}}
			    </div>
			</div>
		</article>
		<article class="content compare relativeAr" v-if="compareShow">
			<h3>{{compare("title").value}}</h3>
			<div class="close" @click="removeCp">×</div>
			<div class="row">
				<div class="large-18 columns">
					<div class="transverse">
					  	<li class="clearfix">
							<div class="img"><img :src="getArticle('arThumb').value" :alt='getArticle("title").value'></div>
							<div class="content">
								<div>作者：<a href="#">{{compare('author').value}}</a></div>
								<div>来源：<a href="#">{{compare('source').value}}</a></div>
								<div>发布时间：<a href="#">{{compare('pubDate').value | dateTime}}</a></div>
								<div>标签：<span class="lg-tag" href="#" v-for="tag in article.SM_tags">{{tag.value}}</span></div>
							</div>
						</li>
					</div>
				</div>
				<div class="large-4 columns">
					<title>系统评分</title>
					<div class="warning-color" style="font-size: 24px;">5.0</div>
				</div>
			</div>
			<div class="article-con row">
			    <div class="large-24 columns">
			        {{getArticle('content').value}}
			    </div>
			</div>
		</article>
		<div class="row" v-else>
			<div class="large-24 column">
				<ul class="info_list">
					<li><a>德化县完成地震监测设施网络升级改造</a><span class="cp" @click="beCompare">对比</span></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      openAr: false,
      isCompare: false,
      compareShow: false
    }
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({
      article: state => state.article
    })
  },
  methods: {
    getArticle (type) {
      return this.article[type] ? this.article[type][0] : ''
    },
    compare (type) {
      return this.article[type] ? this.article[type][0] : ''
    },
    beCompare () {
      this.isCompare = true
      this.compareShow = true
    },
    removeCp () {
      this.isCompare = false
      this.compareShow = false
    },
    arOpen () {
      return this.openAr = this.open
    },
    closeAr () {
      this.$emit('closeAr', false)
    }
  }
}
</script>
<style>
.detail{
	max-width: 580px;
    position: fixed;
    left: -100%;
    width: 100%;
    top: 60px;
    overflow-y: auto;
    overflow-x: hidden;
    background: #fff;
    z-index: 100;
    opacity: 1;
    height: calc(100vh - 60px);
    transition: left .4s, opacity .3s;
    box-shadow: 3px 0px 21px rgba(0,0,0,.4);
}
.detail.open {left: 0;opacity: 1;}
.detail h3 {margin: 0.75rem 1rem;}
.relativeAr{position: relative;}
.close{position: absolute;right: 10px;top: 10px;font-size: 24px;}
.article-con{text-indent: 2em;margin-top: 1rem;}
.content.compare{
	max-height: calc((100vh - 60px)/2);
    overflow: auto;
    border-bottom: 6px solid #ddd;
    padding-bottom: 10px;
}
</style>
