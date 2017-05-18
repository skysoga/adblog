<template>
	<transition name="fade">
		<div class="reveal-overlay" v-show="visible">
			<div class="reveal">
				<header class="reveal-header">
					<h3>{{title}}</h3><slot name="head"></slot>
				</header>
				<section class="reveal-body">
					<slot name="body"></slot>
				</section>
				<footer v-if="$slots.footer">
					<slot name="footer"></slot>
				</footer>
			 	<span class="close" @click="close">×</span>
			</div>
		</div>
	</transition>
</template>
<script>
  export default {
    name: "LgReveal",
    data () {
      return {
        visible: false
      }
    },
    props: {
      title: '',
      open: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      open () {
        this.isOpen()
      }
    },
    methods: {
      close () {
        this.$emit('revealOpen', false)
      },
      isOpen () {
        return this.visible = this.open
      }
    }
  }
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s,transform .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
	.reveal-overlay {
	    position: fixed;
	    display: block;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    z-index: 1005;
	    background-color: rgba(10, 10, 10, 0.45);
	    overflow-y: scroll;
	}
	.reveal {
	    z-index: 1006;
	    display: block;
	    -webkit-backface-visibility: hidden;
	    backface-visibility: hidden;
	    padding: 1rem 1rem 0;
	    border: 1px solid #cacaca;
	    border-radius: 0;
	    background-color: #fefefe;
	    position: relative;
	    top: 100px;
	    margin-right: auto;
	    margin-left: auto;
	    overflow-y: auto;
	}
	.reveal-overlay .close{
		position: absolute;
		right: 10px;
		top: 10px;
		font-size: 24px;
		cursor:pointer;
	}
</style>
