<template>
    <div class="footer">
        <div class="links">
          <dl>
            <dt>关于我们</dt>
            <dd><a href="#">关于</a></dd>
            <dd><a href="#">关于我们</a></dd>
            <dd><a href="#">关于我们啊</a></dd>
            <dd><a href="#">关于我们</a></dd>
          </dl>
          <dl>
            <dt>关于我们</dt>
            <dd><a href="#">关于</a></dd>
            <dd><a href="#">关于我们</a></dd>
            <dd><a href="#">关于我们啊</a></dd>
            <dd><a href="#">关于我们</a></dd>
          </dl>
          <dl>
            <dt>关于我们</dt>
            <dd><a href="#">关于</a></dd>
            <dd><a href="#">关于我们</a></dd>
            <dd><a href="#">关于我们啊</a></dd>
            <dd><a href="#">关于我们</a></dd>
          </dl>
        </div>
      <div class="right">
        <img src="../../../.././assets/web_img/QRcode.jpg" alt="">
      </div>
        <div class="bottom">
        本站资源来自互联网，若有侵权，请联系站长清除<br>
          copyrigh &copy;2018-2019&nbsp;宇宙互联工作室&nbsp;&nbsp;黔ICP备19008883
        </div>
    </div>
</template>

<script>
    export default {
        name: "the-home-below"
    }
</script>

<style scoped>
  .footer{
    width: 1200px;
  }
  a {
    text-decoration: none;
  }
 .footer {
   width: 100%;
   height: 247px;
   background-color: #201e1e;
 }
 .links {
   margin-left: 54px;
 }
  .links dl {
    float: left;
    padding-top: 27px;
    margin-right: 70px;
  }
  .links dt {
    height: 35px;
    font-size: 18px;
    color: #e5e5e5;
    text-align: right;
  }
  .links dd a {
    text-align: left;
    font-size: 13px;
    color: #e5e5e5;

  }
  .links dd a:hover {
    color: #d73d07;
  }
  img {
    width: 150px;
    height: 150px;
    margin-top: 13px;
    margin-left: 395px;
  }
  .bottom {
    float: left;
    width: 100%;
    height: 70px;
    border-top: 1px dotted #5d5d5d;
    font-size: 13px;
    color:#5d5d5d ;
    padding-top: 10px;
    text-align: center;
  }


</style>
