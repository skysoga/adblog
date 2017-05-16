<template>
  <header>
    <div class="row">
      <div class="large-8 columns">
        <lg-search></lg-search>
      </div>
      <div class="large-6 columns">
        <lg-calendar 
        	:props="calendarProps" 
        	@date="getDate"
        ></lg-calendar>
      </div>
    </div>
  </header>
</template>

<script>
  import LgSearch from './search'
  import LgCalendar from './calendar'
  import { mapState } from 'vuex'
  export default {
    name: 'header',
    data () {
      return {
      	index: 0,
        calendarProps: {
          mode: "range",
	      dateFormat: "Y-m-d",
	      time_24hr: true,
	      enableSeconds: false
        }
      }
    },
    computed: {
      ...mapState({
        currUrl: state => state.currUrl
      })
    },
    methods: {
      getDate (date) {
      	var param = ''
      	++this.index
        if (this.index != 2) return
        console.log(this.index, date, this.currUrl)
        let str = this.currUrl
        if (str.indexOf('time=') > 0) {
          str = str.split('&')
          let l = str.length
          var ss
          for (let i = 0; i < l; i++) {
          	ss = '"' + str[i] + '"'
            if ( ss.indexOf('time') > 0 ) {
              str[i] = 'time=' + date
            }
            param = param + str[i] + '&'
          }
        } else {
          param = str + '&' + 'time=' + date
        }
        this.$store.dispatch('FETCH_LIST_DATA', param)
        console.log(param)
        this.index = 0
      }
    },
    components: {
      LgSearch,
      LgCalendar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background: rgba(63,68,88,0.95);
  padding:10px 0;
}
header label input{margin: 0;}
</style>
