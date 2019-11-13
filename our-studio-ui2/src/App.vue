<template>
    <router-view></router-view>
</template>
<script>
    export default {
        name: 'App',
        mounted() {
        }
    }
</script>

<style>

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        overflow: hidden;
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    .el-table th{
        line-height: 130px !important;

    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 20px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    body{
        margin: 0;
        padding: 0;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    .el-add-button{
        position: absolute;
        top: 175px;
        left: 225px;
    }
</style>
