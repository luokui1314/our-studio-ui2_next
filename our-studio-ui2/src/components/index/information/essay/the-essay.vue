
<template>
<div class="big">
    <!--<div class="head1">-->
      <!--<div class="left">全部文档</div>-->
      <!--<div class="rig">上传时间</div>-->
      <!--<div class="rig">阅读量</div>-->
      <!--<div class="rig">发布者</div>-->
    <!--</div>-->
  <div>
    <a v-for="(value,index) in datas" :key="index">

      <ul>
        <li>
          <div class="head"></div>
          <div class="img">
            <img src="../../../.././assets/imgs/Word.png" alt="">
          </div>
          <div class="right">
            <div class="top">
              <div class="zuo">{{value.title}}</div>
              <div class="you">上传日期：{{value.release_time}}</div>
              <div class="you">阅读量：{{value.red}} 次</div>
             <!-- <div class="mid">{{value.author}}</div>-->
            </div>
            <div class="bottom">
              <div class="btm">简介：{{value.abstract}}</div>
              <div class="you_s">
              <div class="btm">类别：{{value.classify}}</div>
              <div class="mid">发布者：{{value.author}}</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </a>
  </div>
</div>
</template>
<script>
  export default {
    name: 'App',
    data(){
      return{
        datas:[
          {
            title:'文章1',//标题
            release_time:'2019-09-09',//上传时间
            red:2019,//阅读量
            classify:'材料',//类别
            abstract:'简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
            author:'王小二',//发布者
          },{
            title:'文章2',//标题
            release_time:'2019-09-09',//上传时间
            red:2019,//阅读量
            classify:'材料',//类别
            abstract:'简介简介介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
            author:'王小二',//发布者
          },{
            title:'文章3',//标题
            release_time:'2019-09-09',//上传时间
            red:2019,//阅读量
            classify:'材料',//类别
            abstract:'简介简介这里是简介简介这里是简介简介srhrs更多人的当然会介这里是简介简介',//简介
            icon: '',//图标
            author:'王小二',//发布者
          },{
            title:'文章4',//标题
            release_time:'2019-09-09',//上传时间
            red:2019,//阅读量
            classify:'材料',//类别
            abstract:'简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
            author:'王小二',//发布者
          },{
            title:'文章5',//标题
            release_time:'2019-09-09',//上传时间
            red:2019,//阅读量
            classify:'材料',//类别
            abstract:'简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
            author:'王小二',//发布者
          },{
            title:'文章6',//标题
            release_time:'2019-09-09',//上传时间
            red:2019,//阅读量
            classify:'材料',//类别
            abstract:'简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
            author:'王小二',//发布者
          },{
            title:'文章7',//标题
            release_time:'2019-09-09',//上传时间
            red:2019,//阅读量
            classify:'材料',//类别
            abstract:'简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
            author:'王小二',//发布者
          },{
            title:'文章8',//标题
            release_time:'2019-09-09',//上传时间
            red:2019,//阅读量
            classify:'材料',//类别
            abstract:'简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
            author:'王小二',//发布者
          },{
            title:'文章9',//标题
            release_time:'2019-09-09',//上传时间
            red:2019,//阅读量
            classify:'材料',//类别
            abstract:'简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
            author:'王小二',//发布者
          },{
            title:'文章10',//标题
            release_time:'2019-09-09',//上传时间
            red:2019,//阅读量
            classify:'材料',//类别
            abstract:'简介简介这里是简介简介这里是简介简介这里是简介简介这里是简介简介',//简介
            icon: '',//图标
            author:'王小二',//发布者
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

  .mid {
    color: #96602b;
    float:left;
    font-size: 15px;
    font-family: "宋体"
  }

  .mid:nth-child(2) {
      position: relative;
      right: 285px;

    }

  .you_s{
    float: right;
    position: relative;
  }
/*////////////////////////big错误///////////////////////////////////////////*/
  /*.big{*/
    /*border: 2px solid #999999;*/
    /**/
  /*}*/



  .rig{
    float: right;
    font-size: 15px;
    font-family: "宋体";
    width: 195px;
  }

  /*.head1{*/
    /*width: 100%;*/
  /*}*/

</style>


