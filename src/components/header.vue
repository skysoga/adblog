<template>
  <header>
    <div class="row align-center">
      <div class="large-6 columns">
        <lg-search></lg-search>
      </div>
    </div>
  </header>
</template>

<script>
  import LgSearch from './search/src/search.vue'
  export default {
    name: 'header',
    data () {
      return {

      }
    },
    components: {
      LgSearch
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background: #204265;
  padding:12px 0;
}
</style>
