<template>
    <div class="box01">
      <el-row>
        <el-col>
          <div class="banner">
            <el-carousel class="banner-carousel" height="500px">
              <el-carousel-item v-for="item in 3" :key="item">
                <div class="banner-font" >
                  <span>“ 宇宙互联工作室 ”</span>
                  <el-divider class="banner-divider"></el-divider>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>

        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "the-home-head"
    }
</script>

<style scoped>
  .box01{
    width: 100%;
    height: 500px;
    overflow: hidden;
    background: url("../../../../assets/web_img/banner1.gif");
  }
  .banner{
    height: 500px;
    width: 1200px;
    margin: 0 auto;
  }
  .banner-font{
    font-size: 35px;
    text-align: center;
    color: white;
    margin-top: 120px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
    .el-divider{
    width: 120px;
    margin: 24px auto;
}
  .el-carousel__item:nth-child(2n) {
    background-color: #470000;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #333333;
  }
</style>
