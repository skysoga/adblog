<template>
	<div class="edit">
		<div id="slide-content" class="slide-content tiny" aria-hidden="true">
			<div class="tab-default pannel">
				<div class="tab" id="tab_basic">
					<div class="tabhead float-left">
						编  辑
					</div>
					<ul class="clearfix float-right">
						<li class="on">基础信息</li>
						<li>统计</li>
						<li>推送</li>
					</ul>
				</div>
				<div class="modcon ">
					<div class="tab_swiper margin-t">
						<!--基础信息-->
						<div id="data_tabdefault_con1" style="display:block;">
							<div class="row">
								<div class="large-4 small-24 column no-padding">
									<label class="text-right">标题：</label>
								</div>
								<div class="large-16 small-16 column">
									<input type="text" :value='getValue("title")' />
								</div>
								<div class="large-4 small-8 columns">
									<a class="font-s14" @click="handleAr">详细内容</a>
								</div>
							</div>
							<div class="row">
								<div class="large-4 small-6 column no-padding">
									<label class="text-right">所属栏目：</label>
								</div>
								<div class="large-20 small-18 column end">
									<lg-catalog></lg-catalog>
								</div>
							</div>
							<div class="row">
								<div class="large-4 small-6 column no-padding">
									<label class="text-right">来源：</label>
								</div>
								<div class="large-20 small-18 column margin-b">
									<label>{{getValue('source')}} &nbsp;</label>
								</div>
							</div>
							<div class="row">
								<div class="large-4 small-6 column no-padding">
									<label class="text-right">时间：</label>
								</div>
								<div class="large-20 small-18 column end">
									<input type="text" v-model="pubdate" />
								</div>
							</div>
							<div class="row">
								<div class="large-4 small-6 column no-padding">
									<label class="text-right">标签：</label>
								</div>
								<div class="large-20 small-18 column">
									<lg-tag :tags="tags" @close="handleClose"></lg-tag>
								</div>
							</div>
							<div class="row">
								<div class="large-4 small-6 column no-padding">
									<label class="text-right">地点：</label>
								</div>
								<div class="large-20 small-18 column end">
									<input type="text" value="" />
								</div>
							</div>
							<div class="row">
								<div class="large-4 small-6 column no-padding">
									<label class="text-right">人物：</label>
								</div>
								<div class="large-20 small-18 column end">
									<input type="text" value="" />
								</div>
							</div>
							<div class="row">
								<div class="large-4 small-6 column no-padding">
									<label class="text-right">事件：</label>
								</div>
								<div class="large-20 small-18 column end">
									<div class="news-tag margin-t6 margin-b">
										<textarea></textarea>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="large-4 small-6 column no-padding">
									<label class="text-right">评分：</label>
								</div>
								<div class="large-20 small-18 column end">
									<div class="small-12 large-12 medium-12 end ">
										<div class="score">
											<span class="badge" v-for="(item, index) in scores" 
												:key="index" 
												:class="{'bg-info' : index ===curIndex }"
												@click="curScore(index)">{{item}}</span>
												<span>{{score}}</span>
										</div>
									</div> 
								</div>
							</div>
						</div>
						<!--统计-->
						<div id="data_tabdefault_con2" style="display:none;">
						</div>
						<!--推送-->
						<div id="data_tabdefault_con3" style="display:none;">
							<div class="screening-conditions">
								<label class="title">当前推送对象的条件列表:<a class="button no-margin-b tiny radius margin-l10" href="#" data-open="create-conditions"><i class="fa fa-plus" aria-hidden="true"></i>添加推送人群</a></label>
								<div class="sure_condition">
									<ul>
										<li>
											<a data-open="create-conditions">1.青少年：城市:福建省福州市;年龄:16-18;性别:不限;</a>
											<a class="condition-close">×</a>
										</li>
										<li>
											<a data-open="create-conditions">2.老年人：城市:福建省福州市;年龄:16-18;性别:不限;</a>
											<a class="condition-close">×</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="screening-article margin-t">
								<label class="title">当前关联的文章:<a class="button no-margin-b tiny radius margin-l10" href="#" data-open="rel-article"><i class="fa fa-plus" aria-hidden="true"></i>创建关联文章</a></label>
								<div class="sure_article">
									<ul>
										<li>
											<a data-open="create-conditions">1.模式发噶似的噶似的拉萨的fda士大夫个</a>
											<a class="condition-close">×</a>
										</li>
										<li>
											<a data-open="create-conditions">2.福建省第政府军阿斯蒂芬噶山豆根;</a>
											<a class="condition-close">×</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="reveal-footer clearfix">
				<div class="row">
					<div class="small-24 columns text-right padding-t">
						<a class="button hollow radius secondary small"> 取 消 </a>
						<a class="small button radius" @click="commit"> 提 交 </a>
					</div>
				</div>
			</div>
			<!--<a class="close-slide-content" aria-label="Close" title="关闭">&#215;</a>-->
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex'
import LgCatalog from '../../components/catelogSelect'
import LgTag from '@/components/tag'
export default {
  data () {
    return {
      tags: [],
      scores: [0, 1, 2, 3, 4, 5],
      score: 0,
      curIndex: 0,
      pubdate: ""
    }
  },
  computed: {
    ...mapState({
      article: state => state.article
    })
  },
  watch: {
    article: function () {
      this.getTag()
      this.pubtime()
      console.log("ssssssssssssssssss", this.article.manualScore)
      this.curScore (Number(this.article.manualScore))
    }
  },
  methods: {
     pubtime () {
       this.pubdate = this.getValue('pubDate_title')
      
    },
    commit () {
      var form = {}
      form.tag = this.tags
      form.manualScore = this.score
      form.pubdate = this.pubdate
      form.id = this.article.id
      this.$store.dispatch("UPDATE_ARTICLE", form)
    },
  
    getValue (type) {
      return this.article[type] ? this.article[type] : ''
    },
    getTag () {
      this.tags = []
      if (!this.article.tag) {
        return
      }
      var tagArr=JSON.parse(this.article.tag)
      for (var tag in tagArr) {
        this.tags.push(tag+"|"+tagArr[tag])
      }
    },
    handleClose (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    },
    handleAr () {
      this.$emit('openAr', true)
    },
    curScore (index) {
      this.score = this.scores[index]
      this.curIndex = index
    }
  },
  components: {
    LgCatalog,
    LgTag
  }
}
</script>
<style>
	.edit{
		height: calc(100vh - 64px);
		overflow-y: auto;
		width: 40%;
		float: left;
		display: inline-block;
		padding: 1rem 1rem 0 0;
	}
	.slide-content {
		background: rgba(255, 255, 255, 0.95);
	}
	
	.slide-content .modcon {
		height: calc(100vh - 191px);
		overflow: auto;
	}
	
	.tab-default .tab {
		height: 46px;
		border-bottom: 2px solid #ddd;
		margin: 0 0 0 10px;
	}
	
	.slide-content .tab .tabhead {
		font-size: 16px;
		margin: 10px 0 0 10px;
	}
	
	.tab-default .tab ul {
		overflow: hidden;
		margin: 0;
		height: 46px;
		line-height: 46px;
		padding: 0 0 0 6px;
		position: relative;
		right: 10px;
	}
	
	.tab-default .tab li.on {
		color: #ffffff;
		background: rgba(50,64,87,.8);
	}
	
	.tab-default .tab li {
	list-style: none;
    font-size: 12px;
    padding: 0 10px;
    line-height: 30px;
    float: left;
    height: 30px;
    text-align: center;
    cursor: pointer;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 3px #e3e3e3;
    background-color: #e3e3e3;
    margin: 15px 10px 0 0px;
    border-radius: 4px 4px 0 0;
    transition: all .3s;
	}
	
	.tab-default .modcon {
		border: none;
		border-bottom: 1px solid #ddd;
	}
	
	.modcon {
		padding: 10px;
		background: #ffffff;
	}
	.reveal-footer{height: 50px;}
	.reveal-footer a{margin-bottom: 0;}
	.text-right{text-align: right;}
	.tabhead a{font-size: 14px;margin-left: 10px;}
</style>
