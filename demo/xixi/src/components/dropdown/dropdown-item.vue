<template>
    <li class="dropdown-item" @click="handleClick"><slot></slot></li>
</template>
<script>
	export default{
		name: 'DropdownItem',
		methods:{
			handleClick(){
				
			}
		}
	}
</script>