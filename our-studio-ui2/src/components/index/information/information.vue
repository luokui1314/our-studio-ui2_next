<template>
    <div>
        <Navigation></Navigation>
        <!--建议在该位置放一级、二级菜单-->
        <!--使用v-for导致其他组件也跟着循环了，没找到问题所在。需要菜单的栏目少，且essay还未更新，最后干脆把二级菜单写到了各自的子组件里-->

        <div id="box">
            <router-link :to="{path: 'essay'}" >分享文章</router-link>
            <router-link :to="{path: 'video'}">分享视频</router-link>
            <router-link :to="{path: 'software'}">分享软件</router-link>
            <router-link :to="{path: 'softwareCoures'}">软件使用教程</router-link>
            <router-link :to="{path: 'website'}">分享网站</router-link>
            <router-link :to="{path: 'informations'}">分享资料</router-link>
            <br>
            <br>
<!--            <div>-->
<!--                <span class="span01" v-for="(value,index) in menu" :key="index">{{value}}</span>-->
<!--            </div>-->
            <router-view ></router-view>
        </div>
    </div>
</template>

<script>
    import Navigation from '../the-navigation'


    export default {
        name: "information",
        data() {
            return {
                // essayMenu:["全部","经验技巧","学校规划","前沿技术"],
                // videoMenu:["全部","编程技巧","语言教程","前沿技术"],
                // softwareMenu:["全部","开发编程","电脑办公","数据分析","虚拟机","Adobe","科技绘图","机械设计","建筑设计",],
                // softwareCouresMenu:["全部","快捷键","基本设置","软件特色"],
                // websiteMenu:["全部"],
                // informationsMenu:["全部"],
                menu:[]
            }
        },
        methods: {

        },
        components: {
            Navigation
        },
        mounted(){
            // switch (this.$router.history.current.path) {
            //     case '/index/information/essay':
            //         this.menu = this.essayMenu;
            //         break;
            //     case '/index/information/video':
            //         this.menu = this.videoMenu;
            //         break;
            //     case '/index/information/software':
            //         this.menu = this.softwareMenu;
            //         break;
            //     case '/index/information/softwareCoures':
            //         this.menu = this.softwareCouresMenu;
            //         break;
            //     case '/index/information/website':
            //         this.menu = this.websiteMenu;
            //         break;
            //     case '/index/information/informations':
            //         this.menu = this.informationsMenu;
            //         break;
            //     default :
            // }
        },
        updated() {
            //路由匹配对应子菜单
            // switch (this.$router.history.current.path) {
            //     case '/index/information/essay':
            //         this.menu = this.essayMenu;
            //         break;
            //     case '/index/information/video':
            //         this.menu = this.videoMenu;
            //         break;
            //     case '/index/information/software':
            //         this.menu = this.softwareMenu;
            //         break;
            //     case '/index/information/softwareCoures':
            //         this.menu = this.softwareCouresMenu;
            //         break;
            //     case '/index/information/website':
            //         this.menu = this.websiteMenu;
            //         break;
            //     case '/index/information/informations':
            //         this.menu = this.informationsMenu;
            //         break;
            //     default :
            // }
        }
    }

</script>

<style scoped>
    #box{
        width: 1200px;
      margin: 0 auto;
        height: 70px;
        background-color: #475669;
    }
    a{
        text-decoration: none;
        font-size: medium;
        color: #e5e5e5;
        margin-left: 80px;
    }
    a:hover{
        color:red;
    }
    .span01{
        display: inline-block;
        width: 80px;
        height: 30px;
        margin: 0 50px;
        background-color: coral;
    }


</style>
