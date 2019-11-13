<template>
<div>
  <div>
  <a href="#">标题1</a>
  <a href="#">标题2</a>
  <a href="#">标题3</a>
  </div>
    <h2>标题1</h2>
    <hr style="height:5px;border:none;border-top:5px groove skyblue;width: 100px;margin-left: 0px" />

  <div class="d1">
    <div class="video">
      <div class="dd1"><img src="../../../../assets/web_img/哈哈.jpg" height="200" width="250"/></div>
      <div class="dd2"><p>随便写点啥</p><span style="font-size: small;color: #8e8e8e">观看次数：</span>
        <br>
        <span>类别:</span>
      </div>
    </div>
    <div class="video">
      <div class="dd1"><img src="../../../../assets/web_img/哈哈.jpg" height="200" width="250"/></div>
      <div class="dd2"><p>随便写点啥</p><span style="font-size: small;color: #8e8e8e">观看次数：</span>
        <br>
        <span>类别:</span>
      </div>
    </div>
    <div class="video">
      <div class="dd1"><img src="../../../../assets/web_img/哈哈.jpg" height="200" width="250"/></div>
      <div class="dd2"><p>随便写点啥</p><span style="font-size: small;color: #8e8e8e">观看次数：</span>
        <br>
        <span>类别:</span>
      </div>
    </div>
    <div class="video">
      <div class="dd1"><img src="../../../../assets/web_img/哈哈.jpg" height="200" width="250"/></div>
      <div class="dd2"><p>随便写点啥</p><span style="font-size: small;color: #8e8e8e">观看次数：</span>
        <br>
        <span>类别:</span>
      </div>
    </div>
    <div class="video">
      <div class="dd1"><img src="../../../../assets/web_img/哈哈.jpg" height="200" width="250"/></div>
      <div class="dd2"><p>随便写点啥</p><span style="font-size: small;color: #8e8e8e">观看次数：</span>
        <br>
        <span>类别:</span>
      </div>
    </div>
  </div>
  <h2>标题2</h2>
  <hr style="height:5px;border:none;border-top:5px groove skyblue;width: 40px;width: 100px;margin-left: 0px" />
  <div class="d2">
    <div class="video">
      <div class="dd1"><img src="../../../../assets/web_img/哈哈.jpg" height="200" width="250"/></div>
      <div class="dd2"><p>随便写点啥</p><span style="font-size: small;color: #8e8e8e">观看次数：</span>
        <br>
        <span>类别:</span>
      </div>
    </div>
    <div class="video">
      <div class="dd1"><img src="../../../../assets/web_img/哈哈.jpg" height="200" width="250"/></div>
      <div class="dd2"><p>随便写点啥</p><span style="font-size: small;color: #8e8e8e">观看次数：</span>
        <br>
        <span>类别:</span>
      </div>
    </div>
    <div class="video">
      <div class="dd1"><img src="../../../../assets/web_img/哈哈.jpg" height="200" width="250"/></div>
      <div class="dd2"><p>随便写点啥</p><span style="font-size: small;color: #8e8e8e">观看次数：</span>
        <br>
        <span>类别:</span>
      </div>
    </div>
    <div class="video">
      <div class="dd1"><img src="../../../../assets/web_img/哈哈.jpg" height="200" width="250"/></div>
      <div class="dd2"><p>随便写点啥</p><span style="font-size: small;color: #8e8e8e">观看次数：</span>
        <br>
        <span>类别:</span>
      </div>
    </div>
    <div class="video">
      <div class="dd1"><img src="../../../../assets/web_img/哈哈.jpg" height="200" width="250"/></div>
      <div class="dd2"><p>随便写点啥</p><span style="font-size: small;color: #8e8e8e">观看次数：</span>
        <br>
        <span>类别:</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "video",
      props:['video'],

      data() {
        return {
        }
      },
      methods: {
          }

    }
    // 获取当前时间
</script>

<style scoped>

.video{
 float: left;
  margin-left: 100px;
}
.dd1{
  height: 200px;
  width: 250px;
  text-align: center;
}
.dd2{
  height: 50px;
  width: 250px;
  border: 1px #475669 solid;
  border-radius: 10%;
  margin-top: 20px;
}

.d1{
  width: 100%;
  height: 300px;

}
  .d2{
    width: 100%;
    height: 300px;


  }
  p{
    text-align: center;
  }
  span{
    font-size: small;color: #8e8e8e;
  }
a {
  text-decoration: none;
  margin-left: 80px;
  font-size: small;
  color: #8e8e8e;
}
a:link{
  color:red;
}


</style>
