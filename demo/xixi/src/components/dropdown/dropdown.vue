<template>
	<div 
		class="dropdown"
		v-clickoutside="onClickoutside"
		>
		<div @click="handleClick">
			<slot></slot>
		</div>
		<div 
			class="dropdownCls"
			v-show="currentVisible">
			<slot name="list"></slot>
		</div>
	</div>
</template>
<script>
 	import clickoutside from '../../directives/clickoutside';
	export default{
		name: 'dropdown',
		directives: { clickoutside },
		props:{
			visible: {
                type: Boolean,
                default: false
            },
		},
		data(){
			return {
				currentVisible: this.visible
			}
		},
		watch: {
			visible (val) {
                this.currentVisible = val;
            },
            currentVisible (val) {
                if (val) {
                    //this.$refs.drop.update();
                } else {
                    //this.$refs.drop.destroy();
                }
                this.$emit('on-visible-change', val);
            }
		},
		methods:{
			handleClick(){
				this.currentVisible = !this.currentVisible;
			},
			onClickoutside (e) { 
                this.handleClose();
                if (this.currentVisible) this.$emit('on-clickoutside', e);
            },
            handleClose () { 
                this.currentVisible = false;
            },
		}
	}
</script>