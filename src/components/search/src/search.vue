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
    <ul id="suggestion" class="ac_result" v-show="open">
      <li v-for="(item, index) in resultData" :class="{hover:index == now}":key="index" @click="searchThis">
        <span class="ac_word-1">{{item}}</span>
      </li>
      <li><span class="ac_word"><span>AT</span>HLETE TEE</span><span class="ac_desc">About 2112 results</span></li>
      <li><span class="ac_word"><span>AT</span>HLETE TEE</span><span class="ac_desc">About 2112 results</span></li>
      <li><span class="ac_word"><span>AT</span>HLETE TEE</span><span class="ac_desc">About 2112 results</span></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'search',
  data () {
    return {
      open: false,
      data: '',
      oldData: '',
      flag: false,
      resultData: [],
      nowLi: -1,
      searchSrc: 'http://cms.jiefeng.me:88/wSuggest.sp'
    }
  },
  methods: {
    get (event) {
      if (event.keyCode === 38 || event.keyCode === 40) {
        return
      }
      this.$http.get(this.searchSrc, {
        params: {
          q: this.data
        }
      })
      .then(function (res) {
        console.log(JSON.parse(res.body).s)
        this.resultData = res.data.s
        this.open = true
      }, function () {

      })
    },
    searchInput () {
      window.open('https://www.baidu.com/s?wd=' + this.data)
      this.data = ''
    },
    searchThis (index) {
      this.data = this.resultData[index]
      this.searchInput()
    },
    selectDown () {
      this.nowLi++
      if (this.nowLi === this.resultData.length) {
        this.nowLi = -1
      }
      this.data = this.resultData[this.nowLi]
    },
    selectUp () {
      this.nowLi--
      if (this.nowLi === -1) {
        this.nowLi = this.resultData.length - 1
      }
      this.data = this.resultData[this.nowLi]
    }
  },
  watch: {
    data: function (val, oldVal) {
      console.log(this.data)
      if (this.data.length <= 0) {
        this.open = false
        console.log('okd')
      }
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
    -webkit-border-radius:6px;
    -moz-border-radius:6px;
    height:40px;
    text-indent:2em;
    color: #fff;
    font-size:0.875rem;
    margin:0;
    width:100%;
    outline: none;
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
