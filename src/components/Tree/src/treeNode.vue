<template>
  <li :style="[padLeft]">
    <div>
    	<i @click.prevent="toggle()" :class="classObject"></i>
    	<i :class="'fa fa-' + icon" v-if="icon"></i>
    	<lg-checkbox 
    		v-if="props.showCheckbox"
    		:label="model[props.id]"
    	>{{model[props.label]}}</lg-checkbox>
    	<template v-if="!props.showCheckbox">
    		<a v-if="typeof(props.Fun) === 'undefined'">{{model[props.label]}}<span v-if="props.hit">（{{model.hit}}）</span></a>
    		<a v-else @click="props.Fun(model)">{{model[props.label]}}<span v-if="props.hit">（{{model.hit}}）</span></a>
    	</template>
    	
    </div>
    <ul v-show='open' v-if="model.children">
      <tree-node
        v-for="(item, index) in model.children"
        :key="item[props.id]"
        :title="item[props.id]"
        :props="props"
        :model="item"
        :icon="icon"
        :num="count"
        >
      </tree-node>
    </ul>
  </li>
</template>
<script>
import LgCheckbox from '@/components/checkbox'
export default {
  name: 'tree-node',
  props: {
    model: {
      type: Object,
      default () {
        return {}
      }
    },
    props: {
      default () {
        return {
          id: 'value',
          children: 'children',
          label: 'label',
          icon: 'icon',
          showCheckbox: {
            type: Boolean,
            default: false
          },
          hit: {
            type: Boolean,
            default: false
          },
          Fun: {
            type: Function,
            default: null
          }
        }
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
      check: false,
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
      if (!this.model.children.length) {
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
  },
  components: {
    LgCheckbox
  }
}
</script>
