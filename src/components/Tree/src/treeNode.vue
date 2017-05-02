<template>
  <li :style="[padLeft]">
    <div>
    	<i @click.prevent="toggle()" :class="classObject"></i>
    	<i :class="'fa fa-' + icon" v-if="icon"></i>
    	<a :href="model.href">{{model.name}}</a>
    </div>
    <ul v-show='open' v-if="model.children">
      <tree-node
        v-for="(item, index) in model.children"
        :key="index"
        :model="item"
        :icon="icon"
        :num="count"
        >
      </tree-node>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'tree-node',
  props: {
    model: {
      type: Object,
      default () {
        return {}
      }
    },
    icon: {
      type: String,
      default: ''
    },
    loading: Boolean,
    href: {
      type: String,
      default: ''
    },
    num: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
      open: false,
      isActive: false,
      turnIcon: 'fa fa-angle-right'
    }
  },
  computed: {
    icons () {
      var i = this.defaultIcon
      if (!this.model.children) {
        i = this.defaultIcon + ' fa-none'
      }
      return i
    },
    count () {
      var c = this.num
      return ++c
    },
    padLeft () {
      return {
        'padding-left': this.count * 10 + 'px'
      }
    },
    classObject () {
      if (this.isActive) {
        this.turnIcon = 'fa fa-angle-down'
      } else {
        this.turnIcon = 'fa fa-angle-right'
      }
      if (!this.model.children) {
        this.turnIcon = this.turnIcon + 'fa-none'
      }
      return this.turnIcon
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
      this.isActive = !this.isActive
    }
  }
}
</script>
