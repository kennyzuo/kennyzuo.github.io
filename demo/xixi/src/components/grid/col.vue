<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    import { findComponentUpward } from '../../utils/assist';
    const prefixCls = 'xixi-col';
    export default {
        name: 'Col',
        props: {
              span: [String,Number],
              order:  [String,Number],
              className : String
        },
        computed: {
          	classes(){
          		return [
          			 `${prefixCls}`,
          			{
	          			[`${prefixCls}`]: !this.span,
	          			[`${prefixCls}-span-${this.span}`]: !!this.span,
	          			[`${prefixCls}-order-${this.order}`] : !!this.order,
	          			[`${this.className}`]: !!this.className
	          		}
	          		]
          	},
          	styles(){
          		let style = {};
          		if(this.$parent && this.$parent.gutter !==0 ){
          			style = {
          				paddingLeft: this.$parent.gutter/2 + 'px',
          				paddingRight: this.$parent.gutter/2 + 'px'
          			};
          		}
          		return style;
          	}   
        }, 
        created(){
        	window.ss = this;
        }
    };
</script>