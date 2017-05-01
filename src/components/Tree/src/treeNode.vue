<template>
  <li>
    <div @click.prevent="toggle()">{{model.name}}</div>
    <ul v-show='open' v-if="model.children">
      <tree-node
        v-for="(item, index) in model.children"
        :key="index"
        :model="item"
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
    }
  },
  data () {
    return {
      open: false
    }
  },
  mounted () {
    console.log(this.model)
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>
