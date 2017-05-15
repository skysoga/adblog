<template>
  <div class="lg-tag-box">
    <span
      class="lg-tag"
      :class="[type ? 'bg' + type : '', {'is-hit': hit}]"
      :style="{backgroundColor: color}"
      v-for='tag in tags'
      :key="tag"
      >
      {{tag}}
      <i
        @click="handleClose(tag)">×</i>
    </span>
  	<input
	  class="add-new-tag"
	  v-if="inputVisible"
	  type="text"
	  ref="saveTagInput"
	  v-model="inputValue"
	  @keyup.enter="handleInputConfirm"
	  @blur="handleInputConfirm"
	>
  	<button v-else class="button tiny hollow" @click="showInput">+ New Tag</button>
  </div>
</template>
<script>
  export default {
    name: 'LgTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      closeTransition: Boolean,
      color: String,
      tags: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data () {
      return {
        inputVisible: false,
        inputValue: '',
        resultTags: []
      }
    },
    methods: {
      handleClose (tag) {
        this.$emit('close', tag)
      },
      showInput () {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.focus()
        })
      },
      handleInputConfirm () {
        let inputValue = this.inputValue
        if (inputValue) {
          this.tags.push(this.inputValue)
        }
        this.inputVisible = false
        this.inputValue = ''
      }
    }
  }
</script>
<style>
   .lg-tag-box{min-height:34px;margin-bottom: 1rem;}
   .lg-tag-box .lg-tag{margin: 0 0 0 6px;}
   .lg-tag-box .button, .lg-tag-box input{margin-bottom: 0;}
   .lg-tag-box .add-new-tag{width: 78px;vertical-align: bottom;height: 24px;}
</style>
