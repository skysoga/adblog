<template>
  <div class="list-view">
    <div class="list-nav">
      <router-link v-if="page > 1" :to="'/' + type + '/' + (page - 1)">&lt; prev</router-link>
      <a v-else class="disabled">&lt; prev</a>
      <span>{{ page }}/{{ maxPage }}</span>
      <router-link v-if="hasMore" :to="'/' + type + '/' + (page + 1)">more &gt;</router-link>
      <a v-else class="disabled">next &gt;</a>
    </div>
    <transition :name="transition">
      <div class="news-list" :key="displayedPage" v-if="displayedPage > 0">
        <transition-group tag="ul" name="item">
          <item v-for="item in displayedItems" :key="item.id" :item="item">
          </item>
        </transition-group>
      </div>
    </transition>
  </div>
</template>
<script>

export default {
  name: 'item-list',
  props: {
    type: String
  },

  data () {
    return {
      transition: 'slide-right',
      displayedItems: [],
      page: 1,
      maxPage: 20
    }
  },

  computed: {
    hasMore () {
      return this.page < this.maxPage
    }
  },

  methods: {
  }
}
</script>
<style>
	.list-nav{
		padding: 15px 30px;
	    position: fixed;
	    text-align: center;
	    top: 55px;
	    left: 35;
	    right: 0;
	    z-index: 998;
	    box-shadow: 0 1px 2px rgba(0,0,0,.1);		
	}
</style>
