<template>
  <div class="form-search" id="form-search">
    <label>
      <span class="fa fa-search"></span>
      <input
        v-model="data"
        @keyup="get($event)"
        @keyup.down="selectDown()"
        @keydown.enter="searchInput()"
        @keyup.up.prevent="selectUp()"
        placeholder="请输入..."
        autocomplete="off"
      />
    </label>
    <div class="btn-sure" @click="searchInput()"><a>GO</a></div>
    <ul id="suggestion" class="ac_result" v-show="resultData.length && open">
      <li v-for="(item, index) in resultData" :class="{hover:index == nowLi}" :key="index" @click="searchThis(index)">
        <span class="ac_word-1">{{item[0]}}</span><span class="ac_desc">About {{item[1]}} results</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { fetchSearch } from '../../../api'
export default {
  name: 'search',
  data () {
    return {
      open: true,
      data: '',
      flag: false,
      resultData: [],
      nowLi: -1
    }
  },
  methods: {
    get (event) {
      if (event.keyCode === 38 || event.keyCode === 40) {
        return
      }
      var param = {params: {q: this.data}}
      fetchSearch(param)
      .then((res) => {
        var str = res.replace(/(KISSY\.Suggest\.callback)\(\{(.*?)\}\)/, '{$2}')
        str = str.replace(/'/g, '"')
        this.resultData = JSON.parse(str).result
      }, function () {

      })
    },
    searchInput () {
      var param = 'wNewsRecommend.sp?act=search&q=' + this.data
      this.$store.dispatch('FETCH_LIST_DATA', param).then(() => {
        this.resultData = []
      })
      this.open = false
    },
    searchThis (index) {
      this.data = this.resultData[index][0]
      this.resultData = []
      this.searchInput()
    },
    selectDown () {
      if (this.data.length == 0) return
      this.nowLi++
      if (this.nowLi === this.resultData.length) {
        this.nowLi = 0
      }
      this.data = this.resultData[this.nowLi][0]
    },
    selectUp () {
      if (this.data.length == 0) return
      this.nowLi--
      if (this.nowLi === -1) {
        this.nowLi = this.resultData.length - 1
      }
      this.data = this.resultData[this.nowLi][0]
    }
  },
  watch: {
    data: function (val, oldVal) {
      this.open = true
    }
  }
}
</script>
<style>
  .form-search{
    position: relative;
  }
  .form-search > label{
    position: relative;
    padding-right:60px;
  }
  .form-search > label > span {
    position: absolute;
    left: 0.768rem;
    top: 50%;
    margin-top: -6px;
    color: #fff;
  }
  .form-search > label > input ,  .form-search > label > input:focus {
    background: none;
    -webkit-border-radius:0;
    -moz-border-radius:0;
    height:40px;
    text-indent:2em;
    color: #fff;
    font-size:0.875rem;
    margin:0;
    width:100%;
    outline: none;
    border-width:0 0 3px 0;
  }
  .form-search .btn-sure{
    cursor: pointer;
    position: absolute;
    display: block;
    height:40px;
    width:40px;
    line-height:40px;
    -webkit-border-radius:;
    -moz-border-radius:;
    border-radius:50%;
    right:0;
    top:0;
    background: #fff;
    text-align: center;
  }
  .ac_result{
    position: absolute;
    width: 100%;
    background: #fff;
    padding: 10px 0;
    margin: 10px 0;
    z-index: 10;
    box-shadow: 0 0 7px rgba(0,0,0,.4);
  }
  .ac_result li {
     font-size: 12px;
     list-style: none;
     height: 32px;
     line-height: 32px;
     cursor: pointer;
     padding: 0 1rem;
   }
  .ac_result li:hover,.ac_result li.hover{
    background: #f3f4f4;
  }
  .ac_word {
    width: 60%;
    display: inline-block;
    padding: 0;
    text-align: left;
    color: #606060;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ac_word span{
    font-weight: 700;
    color:#f02137;
  }
  .ac_desc {
    float: right;
    display: inline-block;
    width: 36%;
    text-align: right;
    color: #B2B2B2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
