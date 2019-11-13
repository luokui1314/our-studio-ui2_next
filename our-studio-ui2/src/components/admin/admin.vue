<template>
  <el-container>
    <el-aside width="200px" ><Aside></Aside></el-aside>
    <el-container>
      <el-header><div id="Header"></div>宇宙互联后台管理界面</el-header>
      <el-main><div id="div01"><router-view></router-view></div></el-main>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </el-container>
</template>

<script>
  import Aside from "./Aside/Aside"
  import Main from "./Main/the-userInfo"
  import Footer from "./Footer/Footer"
    export default {
        name: "admin",
      data(){
        return{
        }
      },
      components :{Aside,Main,Footer}
    }
</script>

<style scoped>
  #div01{
    height: 670px;
  }
  *{
    margin: 0;
    padding: 0;
  }
</style>
