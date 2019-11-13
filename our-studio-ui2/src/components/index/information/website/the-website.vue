<template>
  <div>
    <!--f分享网站做3排，每排5个-->
  <div class="d1">
    <div class="dd1"><a href="https://www.w3school.com.cn/"><img src="../../../../assets/web_img/w3cschool logo.png" height="200" width="200"/></a></div>
    <div class="dd2"><a href="http://www.itheima.com/"><img src="../../../../assets/web_img/黑马程序猿logo.jpg" height="200" width="200"/></a></div>
    <div class="dd3"><a href="https://spring.io/"><img src="../../../../assets/web_img/spring logo.jpeg" height="150" width="200"/></a></div>
    <div class="dd4"><a href="https://nodejs.org/en/"><img src="../../../../assets/web_img/note.js logo.jpg" height="123" width="200"/></a></div>
    <div class="dd5"><a href="https://github.com/"><img src="../../../../assets/web_img/github logo.jpg" height="120" width="200"/></a></div>
  </div>
    <div class="d2">
      <div class="dd1"><a href="https://www.python.org/"><img src="../../../../assets/web_img/python logo.png" height="200" width="200"/></a></div>
      <div class="dd2"><a href="https://www.java.com/zh_CN/"><img src="../../../../assets/web_img/java logo.jpg" height="180" width="200"/></a></div>
      <div class="dd3"><a href="https://www.oracle.com/index.html/"><img src="../../../../assets/web_img/oracle logo.jpg" height="200" width="200"/></a></div>
      <div class="dd4"><a href="https://www.mysql.com/"><img src="../../../../assets/web_img/mysql logo.jpg" height="200" width="195"/></a></div>
      <div class="dd5"><a href="https://www.php.net/"><img src="../../../../assets/web_img/php logo.jpg" height="200" width="200"/></a></div>
    </div>
<div class="d3">
  <div class="dd1"><a href="https://www.csdn.net/"><img src="../../../../assets/web_img/csdn logo.jpg" height="150" width="200"/></a></div>
  <div class="dd2"><a href="https://developer.android.google.cn/"><img src="../../../../assets/web_img/安卓 logo.jpg" height="200" width="200"/></a></div>
  <div class="dd3"><a href="http://www.gzmu.edu.cn/"><img src="../../../../assets/web_img/贵州民族大学 logo.jpg" height="200" width="200"/></a></div>
  <div class="dd4"><a href="https://www.javascript.com/"><img src="../../../../assets/web_img/js logo.jpg" height="200" width="200"/></a></div>
  <div class="dd5"><a href="https://cn.vuejs.org/"><img src="../../../../assets/web_img/vue logo.jpg" height="200" width="200"/></a></div>
</div>
  </div>
</template>

<script>
    export default {
        name: "website"
    }

</script>

<style scoped>
.d1{
  width: 100%;
  height: 200px;
  margin-top: 160px;
}
  .d2{
    width: 100%;
    height: 200px;
    margin-top: 20px;
  }
  .d3{
    width: 100%;
    height: 200px;
    margin-top: 20px;
    position: absolute;
  }
  .dd1{
    width: 200px;
    height: 200px;
    margin-left: 100px;
    position: absolute;
    float: left;
  }
  .dd2{
    width: 200px;
    height: 200px;
    margin-left: 450px;
    position: absolute;
    float: left;
  }
  .dd3{
    width: 200px;
    height: 200px;
    margin-left: 800px;
    float: left;
    position: absolute;
  }
  .dd4{
    width: 200px;
    height: 200px;
    margin-left: 1150px;
    float: left;
    position: absolute;
  }
  .dd5{
    width: 200px;
    height: 200px;
    margin-left: 1500px;
    float: left;
    position: absolute;
  }
a img{border: white solid 2px;}
a img:hover{border: #B3C0D1 solid 1px;}
</style>
