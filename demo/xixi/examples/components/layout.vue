<template>
    <div class="layout-demo-con">
        <Layout>  
                <Header>Header</Header>
                <Content>Contentddd</Content>
                <Footer>Footer</Footer> 
        </Layout>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isCollapsed: false
        };
    },
    methods: {
        toggleCollapse () {
            this.$refs.side.toggleCollapse();
        }
    },
    watch: {
        isCollapsed (val) {
            // console.log(val)
        }
    }
};
</script>
<style scoped>
    .layout-demo-con{
        height: 100%;
    }
</style>