<template>
    <div>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <br><br>
        <Button type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>
        <br><br>
        <Button type="primary" shape="circle" icon="ion-ios-search"></Button>
        <Button type="primary" icon="ion-ios-search">Search</Button>
        <Button type="primary" shape="circle" icon="ion-ios-search">Search</Button>
        <Button type="primary" shape="circle">Circle</Button>
        <br><br>
        <Button type="ghost" shape="circle" icon="ion-ios-search"></Button>
        <Button type="ghost" icon="ion-ios-search">Search</Button>
        <Button type="ghost" shape="circle" icon="ios-search">Search</Button>
        <Button type="ghost" shape="circle">Circle</Button>
        <br><br>
        <Button>Default</Button>
        <Button disabled long>Default(Disabled)</Button>
        <br>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>Primary(Disabled)</Button>
        <br>
        <Button type="ghost">Ghost</Button>
        <Button type="ghost" disabled>Ghost(Disabled)</Button>
        <br>
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>Dashed(Disabled)</Button>
        <br>
        <Button type="text">Text</Button>
        <Button type="text" disabled>Text(Disabled)</Button>

        <p style="font-size:24px;"> button group </p>

        <Button-group size="small" shape="circle">
            <Button type="primary">取消</Button>
            <Button type="primary">确定</Button>
        </Button-group>
        <Button-group>
            <Button disabled>昨日</Button>
            <Button disabled>今日</Button>
            <Button disabled>明日</Button>
        </Button-group>
        <Button-group>
            <Button type="primary">L</Button>
            <Button>M</Button>
            <Button type="ghost">M</Button>
            <Button type="dashed">R</Button>
        </Button-group>
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