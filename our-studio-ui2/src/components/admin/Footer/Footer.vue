<template>
    <el-pagination
            background
            :current-page=1
            layout="prev, pager, next"
            @current-change="show"
            :total="len">
    </el-pagination>
</template>

<script>
    import jiaohu from "../jiaohu";
    export default {
        name: "Footer",
        data(){
            return{
                len:0,
                yesu:1
            }
        },
        methods:{
            bbtn:function () {
                jiaohu.$on("len",(lens)=>{
                    this.len = lens.length;
                })
            },
            show:function (ye) {
                jiaohu.$emit("ye",ye);
            }
        },
        beforeUpdate(){
            this.bbtn()
        }
    }
</script>

<style scoped>
</style>
