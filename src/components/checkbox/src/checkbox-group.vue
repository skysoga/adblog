<script>
  import Emitter from '../../../utils/emitter'
  export default {
    name: 'LgCheckboxGroup',

    componentName: 'LgCheckboxGroup',

    mixins: [Emitter],

    props: {
      value: {}
    },

    watch: {
      value (value) {
        this.dispatch('LgFormItem', 'lg.form.change', [value])
      }
    }
  }
</script>

<template>
  <div class="lg-checkbox-group">
    <slot></slot>
  </div>
</template>
