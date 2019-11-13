<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
              scrolltop:0,
          }
        },
        mounted() {
            var a = null;
            console.log(!a);
            /*//登录
            //1强行cookie中的isLogin
            this.$cookies.set("isLogin",true);
            //2.将结果保存到vuex
            this.$store.commit('updataIsLogin',this.$cookies.get("isLogin"));*/
        },
        methods:{

        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
</style>
