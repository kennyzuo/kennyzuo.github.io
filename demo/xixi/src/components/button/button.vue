<template>
    <button
        :type = "type"
        :class = "classes"
        :disabled = "disabled">
    <Icon :type = "icon"></Icon>
    <span v-if="showSlot" ref="slot"><slot></slot></span>
    </button>
</template>


<script>
    import Icon from '../icon';
    const prefixCls = 'xixi-btn';
    export default{
        name: 'Button',
        components:{
            Icon
        },
        props:{
            type: String,
            shape: String,
            icon: String,
            size: String,
            disabled: Boolean,
            long: Boolean,
            loading: Boolean
        },
        data(){
            return{
                showSlot:true
            }
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`,
                    !!this.type ? `${prefixCls}-${this.type}` : '',
                    this.long ? `${prefixCls}-long` : '',
                    !!this.shape ? `${prefixCls}-${this.shape}` : '',
                    !!this.size ? `${prefixCls}-${this.size}` : '', 
                    !!this.icon && !this.showSlot ? `${prefixCls}-icon-only` : '', 
                ].reduce( (accumulator, currentValue) => accumulator + " " + currentValue).trim();
            }
        },
        mounted(){
            this.showSlot = this.$slots.default !== undefined;
        }
    }
</script>

