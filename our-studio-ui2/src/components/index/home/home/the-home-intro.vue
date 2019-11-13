<template>
    <div class="box01">
        <el-row :gutter="24" >
            <el-col :span="10" class="intro-right-box tran">
              <div class="title" ><img  src="../../../../assets/default_imgs/win.png" width="35px"><a style="margin-left: 10px; font-size: 24px" >团队荣誉</a></div>
                <el-carousel :interval="4000" type="card" height="310px">
                    <el-carousel-item class="intro-card-ca" v-for="item in award" :key="item.name">
                        <el-card shadow="always" class="intro-card-nei">
                            <div class="intro-card-radio">
                                <!--<img src="" width="150px" height="150px" style="border-radius: 50%"/>-->
                            </div>
                            <h4 class="center">{{item.center}}</h4>
                            <p>{{item.name}}</p>
                            <p>指导老师:{{item.teacher}}</p>
                        </el-card>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
          <el-col :span="12">
            <div class="title2" ><img  src="../../../../assets/default_imgs/star.png" width="35px"><a style="margin-left: 10px; font-size: 24px" >一周之星</a></div>
            <el-card class="box-card-intro">
              <div align="center">
                <div class=" img-box" > </div>
                <p>王明</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "the-home-intro",
        data(){
            return{
                award:[
                    //假数据
                    {
                        img:'',//头像
                        center:'挑战杯优秀奖',//奖项
                        name:'陈晋',//获奖人
                        teacher:'陈妍'//指导老师
                    },{
                        img:'',//头像
                        center:'挑战杯优秀奖',//奖项
                        name:'王明',//获奖人
                        teacher:'陈妍'//指导老师
                    },{
                        img:'',//头像
                        center:'挑战杯优秀奖',//奖项
                        name:'吴英',//获奖人
                        teacher:'陈妍'//指导老师
                    },{
                        img:'',//头像
                        center:'挑战杯优秀奖',//奖项
                        name:'陈瑶',//获奖人
                        teacher:'陈妍'//指导老师
                    },{
                        img:'',//头像
                        center:'挑战杯优秀奖',//奖项
                        name:'韩颖',//获奖人
                        teacher:'陈妍'//指导老师
                    }
                ]
            }
        },
        methods:{
            handleScroll() {
                /*this.$store.commit('updatascrollTop',document.documentElement.scrollTop);*/
                /*if(this.$store.state.scrolltop >= 10){
                    document.getElementsByClassName("tran")[0].style.filter = "alpha(Opacity=100)";
                    document.getElementsByClassName("tran")[0].style.opacity = 1;
                    document.getElementsByClassName("tran")[0].style.top = "0px";
                    document.getElementsByClassName("tran")[1].style.filter = "alpha(Opacity=100)";
                    document.getElementsByClassName("tran")[1].style.opacity = 1;
                    document.getElementsByClassName("tran")[1].style.top = "0px";
                }*//* else if(this.$store.state.scrolltop < 110){
                    document.getElementsByClassName("tran")[0].style.filter = "alpha(Opacity=0)";
                    document.getElementsByClassName("tran")[0].style.opacity = 0;
                    document.getElementsByClassName("tran")[0].style.top = "500px";
                    document.getElementsByClassName("tran")[1].style.filter = "alpha(Opacity=0)";
                    document.getElementsByClassName("tran")[1].style.opacity = 0;
                    document.getElementsByClassName("tran")[1].style.top = "500px";
                }*/
            },
        },
        mounted() {
            this.$store.commit('updatascrollTop',document.documentElement.scrollTop);
            window.addEventListener('scroll', this.handleScroll);
            document.getElementsByClassName("tran")[0].style.filter = "alpha(Opacity=100)";
            document.getElementsByClassName("tran")[0].style.opacity = 1;
            document.getElementsByClassName("tran")[0].style.top = "0px";

        },
        beforeUpdate: function() {

        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
    .box01{
        width: 1200px;
        height: 500px;
      margin: 0 auto;
        overflow: hidden;
    }
    .intro-left-box{
        width: 35%;
        height: 500px;
        margin-left: 7%;
    }
    .intro-card{
        height: 390px;
        margin-top: 20px;
        padding: 50px 40px 10px 50px;
    }
    .intro-right-box{
        width: 45%;
        height: 500px;
        margin-left: 50px;
        padding-top: 50px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .intro-card-ca{
        width: 350px;
    }
    .intro-card-nei{
        height: 310px;
        width: 90%;
        text-align: center;
    }
    .intro-card-radio{
        width: 150px;
        height: 150px;
        margin: 0 auto;
        background-color: #848686;
        border-radius: 50%;
    }
    .intro-card-radio img{
        z-index: -1;
    }
    .center{
        width: auto;
        text-align: center;
        padding-top: 5px;
        margin: 0 auto;
    }
    .tran{

        filter:alpha(Opacity=0);
        -moz-opacity:1;
        opacity: 0;
        transition-duration: 1.2s;
    }
  .box-card-intro{
    width: 450px;
    height: 320px;
    margin-left: 100px;
    margin-top: 40px;
  }
  .title{
     margin-bottom: 40px;
     margin-left: 260px;
     padding-bottom: 10px;
   }
    .title2{
     margin: 50px 0 40px 240px;
      padding-bottom: 10px;
    }
  .img-box{
    width: 200px;
    height: 200px;
    margin: 20px auto;
    border-radius: 50%;
    background-color: #CC5522;
  }
</style>
