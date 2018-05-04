<template>
    <div> 
       <!-- <Dropdown trigger="click" style="margin-left: 20px" placement="right-start" >
            <a href="javascript:void(0)">
                    right-start
                    <Icon type="arrow-down-b"></Icon>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem>北京烤鸭</DropdownItem>
            </DropdownMenu>
        </Dropdown> -->
        <Dropdown>
            <Button type="primary">
               下拉菜单
               <Icon type="ion-arrow-down-b"></Icon>
            </Button>
            <DropdownMenu slot="list">
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem>北京烤鸭</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>
<style>
    button{
        /*margin: 8px 5px;*/
    }
</style>
<script>
    export default {
    }
</script>