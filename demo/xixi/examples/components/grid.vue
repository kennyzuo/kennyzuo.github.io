<style>
    .xixi-col{
        padding: 10px 0;
        text-align: center;
        background-color: rgba(0,153,229,.9);
     }
     .xixi-col:nth-child(odd){
        background-color: rgba(0,153,229,.7);
     }
     
</style>
<template>
    <div>
        <Row :gutter="16">
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
        </Row>
        <br>
        <Row>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <br>
        <Row type="flex">
            <Col span="3">
                <div>col-3</div>
            </Col>
            <Col span="3">
                <div>col-3</div>
            </Col>
            <Col span="3">
                <div>col-3</div>
            </Col>
            <Col span="3">
                <div>col-3</div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                n: 2
            }
        },
        methods: {
            add () {
                this.n++;
            }
        }
    }
</script>