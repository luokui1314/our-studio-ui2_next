<template>
    <div class="box01">
     <p class="cc">团队组成</p>
      <el-carousel :interval="5000" arrow="never" height="280px"  >
        <el-carousel-item v-for="(item,c) in a" :key="c">
          <div style="margin-bottom: 20px;">{{item.text}}</div>
          <div class="aa">
              <div class="a">
                  <div class="b">{{item.img}}</div>
                  <div>名字</div>
                  <p>个人简历：包含自己的基本信息：姓名、性别、年龄、民族、籍贯、政治面貌、学历、联系方式，以及自我评价、工作经历、等等。</p>
              </div>
              <div class="a">
                  <div class="b">{{item.img}}</div>
                  <div>名字</div>
                  <p>个人简历：包含自己的基本信息：姓名、性别、年龄、民族、籍贯、政治面貌、学历、联系方式，以及自我评价、工作经历、等等。</p>
              </div>
              <div class="a">
                   <div class="b">{{item.img}}</div>
                   <div>名字</div>
                   <p>个人简历：包含自己的基本信息：姓名、性别、年龄、民族、籍贯、政治面貌、学历、联系方式，以及自我评价、工作经历、等等。</p>
              </div>
           </div>
        </el-carousel-item>
       </el-carousel>

    </div>
</template>

<script>
     export default {
        name: "the-home-team",
      data(){
          return{
            a:[{
              text:"工作室有20人，都是人中龙凤，青年翘楚",
              img:"图片1",
              text1:"工作室有20人，都是人中龙凤，青年翘楚",

            },{
              text:"工作室有20人，都是人中龙凤，青年翘楚",
              img:"图片2",

            },{
              text:"工作室有20人，都是人中龙凤，青年翘楚",
              img:"图片3",

            },{
              text:"工作室有20人，都是人中龙凤，青年翘楚",
              img:"图片4",

            },]
          }
      }
    }
</script>

<style scoped>
   .box01{ width: 1200px; text-align: center; margin:0 auto; margin-top: 90px; margin-bottom: 100px;}


  .el-carousel__item h2 {
    color: #666666;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(1) {
    background-color: white;
    indicator-position:none;

  } /*控制第一个*/

  .el-carousel__item:nth-child(2) {
   background-color: white;

  }
  .el-carousel__item:nth-child(3) {
    background-color: white;
  }
  .el-carousel__item:nth-child(4) {
    background-color:white;
  }
  .el-carousel__item:nth-child(5) {
    background-color: white;
  }
  .aa{ margin-left:90px; margin-top: 0px}
  .a{width:300px; height:250px; background: #E9EEF3; float: left; margin: auto; margin-left: 30px}
  .b{ height: 90px; width: 90px; background: gold; margin: auto; border-radius: 50%; margin-top: 10px}
  .cc{ font-size: 35px;
       text-align: center;}

</style>
