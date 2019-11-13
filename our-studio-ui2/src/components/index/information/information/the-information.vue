<template>
  <div>
    <a href="#" style="float: left; text-decoration: none;margin-left: 80px;font-size: small;color: #8e8e8e;">标题1</a>
    <a href="#" style="float: left;text-decoration: none;margin-left: 80px;font-size: small;color: #8e8e8e;">标题2</a>
    <a href="#" style="float: left;text-decoration: none;margin-left: 80px;font-size: small;color: #8e8e8e;">标题3</a>
    <!--遇到了问题未解决，简单的将二级菜单写到了子组件里-->
    <br>
    <a v-for="(value,index) in datas" :key="index">
      <ul>
        <li>
          <div class="img">
            <img src="../../../.././assets/imgs/Word.png" alt="">
          </div>
          <div class="right">
            <div class="top">
              <div class="zuo">{{value.title}}</div>
              <div class="you">上传日期：{{value.release_time}}</div>
              <div class="you">下载量：{{value.downloads}} 次</div>
            </div>
            <div class="bottom">
              <div class="btm">简介：{{value.abstract}}</div>
              <div class="btm">类别：{{value.classify}}</div>
            </div>
          </div>
        </li>
      </ul>
    </a>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data(){
      return{
        datas:[
          {
            title:'这是一个资料1',//标题
            release_time:'2019-09-09',//上传时间
            downloads:1234,//下载量
            classify:'教育',//类别
            abstract:'这里是简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
          },{
            title:'这是一个资料2',//标题
            release_time:'2019-09-09',//上传时间
            downloads:1234,//下载量
            classify:'教育',//类别
            abstract:'这里是简介简介介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
          },{
            title:'这是一个资料1',//标题
            release_time:'2019-09-09',//上传时间
            downloads:1234,//下载量
            classify:'教育',//类别
            abstract:'这里是简介简介这里是简介简介这里是简介简介srhrs更多人的当然会介这里是简介简介',//简介
            icon: '',//图标
          },{
            title:'这是一个资料1',//标题
            release_time:'2019-09-09',//上传时间
            downloads:1234,//下载量
            classify:'教育',//类别
            abstract:'这里是简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
          },{
            title:'这是一个资料1',//标题
            release_time:'2019-09-09',//上传时间
            downloads:1234,//下载量
            classify:'教育',//类别
            abstract:'这里是简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
          },{
            title:'这是一个资料1',//标题
            release_time:'2019-09-09',//上传时间
            downloads:1234,//下载量
            classify:'教育',//类别
            abstract:'这里是简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
          },{
            title:'这是一个资料1',//标题
            release_time:'2019-09-09',//上传时间
            downloads:1234,//下载量
            classify:'教育',//类别
            abstract:'这里是简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
          },{
            title:'这是一个资料1',//标题
            release_time:'2019-09-09',//上传时间
            downloads:1234,//下载量
            classify:'教育',//类别
            abstract:'这里是简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
          },{
            title:'这是一个资料1',//标题
            release_time:'2019-09-09',//上传时间
            downloads:1234,//下载量
            classify:'教育',//类别
            abstract:'这里是简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
          },{
            title:'这是一个资料1',//标题
            release_time:'2019-09-09',//上传时间
            downloads:1234,//下载量
            classify:'教育',//类别
            abstract:'这里是简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
          },
        ]
      }
    },
    created() {
      this.axios.post('http://localhost:3000/Gaindata/users.php').then(body => {
        this.lists = body.data
      })
    }

  };
</script>

<style scoped>
  a {
    display: block;
  }
li {
  list-style: none;
  width: 100%;
  height: 96px;
  border-top: 1px solid #e5e5e5;
 border-bottom: 1px dashed #e5e5e5;
}
  img {
    float: left;
    width: 104px;
    height: 75px;
    margin-top: 12px;
    /*f9f9f9*/
  }
  .right {
    float:right;
    width: 1055px;
    height: 96px;
    background-color: #ffffff;
  }
  .top {
    float: left;
    width: 100%;
    height: 48px;
    line-height: 65px;
  }
  .bottom {
    float: left;
    width: 100%;
    height: 48px;
    color: #999999;
    font-size: 12px;
    line-height: 20px;
  }
  .zuo {
    width: 475px;
    float: left;
    font-family: "宋体";
    font-size: 18px;
    color: #333333;
  }
  .you{
    width: 195px;
    font-size: 15px;
    font-family: "宋体";
    float: right;
  }
.you:nth-child(2) {
  color: #999999;

}
.btm {
  color: #96602b;
  float: left;
}

  .btm:nth-child(2) {
    float: right;
    position: relative;
    right: 46px;

  }
</style>

