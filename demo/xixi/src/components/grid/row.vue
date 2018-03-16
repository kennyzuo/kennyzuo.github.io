<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    import { oneOf, findComponentsDownward } from '../../utils/assist';
    const prefixCls = 'xixi-row';
    export default {
        name: 'Row',
        props: {
        	type:{
        		validator(val){
        			return oneOf(val, ["flex"]);
        		}
        	},
        	align:{
        		validator(val){
        			return oneOf(val, ["flex-start","center","flex-end"]);
        		}
        	},
        	justify:{
        		validator(val){
        			return oneOf(val, ["flex-start","flex-end","center","space-between","space-around"])
        		}
        	},
        	gutter:{
        		type: Number,
        		default: 0
        	},
            className: String,
        },
        computed: {
             classes(){
             	return {
             		[`${prefixCls}`]: !this.type,
             		[`${prefixCls}-${this.type}`]: !!this.type,
             		[`${prefixCls}-${this.type}-align`]: !!this.type && !!this.align,
             		[`${prefixCls}-${this.type}-justify`]: !!this.type && !!this.justify,
             		[`${this.className}`]: !!this.className
             	}
             },
             styles(){
             	let style = {};
             	if(this.gutter !== 0){
             		style = {
             			marginLeft: this.gutter / -2 + 'px',
             			marginRight: this.gutter / -2 + 'px'
             		}
             	}
             	return style;
             }
        },
        methods: { 
        },
        watch: {
            
        }
    };
</script>