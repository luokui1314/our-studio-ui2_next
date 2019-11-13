<template>
    <div class="box01">
      <el-row class="share">
        <el-col>
          <div class="share_title">
            <span>学习分享</span>
          </div>

        </el-col>
        <el-col class="share_left">
            <div :span="8">
              <el-card class="share_card" shadow="hover" v-for="(card,index) in share" :key="index" @click="click01()" :body-style="{ padding: '0px' }">
                <a href="#"><img :src="card.img" class="image"></a>
                <div class="share_care_content">
                  <a href="#"><span>{{card.title}}</span></a>
                  <div class="bottom">
                    <span class="share_card_author"><span class="share_card_author_by">by</span> {{card.author}}</span>
                    <span class="share_card_sort">{{card.sort}}</span>
                    <span class="share_card_time">{{card.time}}</span>
                  </div>
                </div>
              </el-card>
            </div>
        </el-col>


      </el-row>
    </div>
</template>

<script>
    export default {
        name: "the-home-share",
        data() {
            return {
                //假数据
              essayData:[
                  {
                      sort:'工作室动态(14)'
                  },
                  {
                      sort:'常用工具(20)'
                  },
                  {
                      sort:'课程分享(16)'
                  },
                  {
                      sort:'个人作品(8)'
                  },
                  {
                      sort:'学习分享(23)'
                  },
                  {
                      sort:'学习分享(18)'
                  },
                  {
                      sort:'更多'
                  }
              ],
              share:[
                  {
                      img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',//图片
                      title:'PHP从入坑到入土！',//标题
                      author:'陈妍',//作者
                      sort:'实用教程',//文章分类
                      time:'2019-9-6'//发表时间
                  },
                  {
                      img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                      title:'PHP从入坑到入土！',
                      author:'陈妍',
                      sort:'实用教程',
                      time:'2019-9-6'
                  },
                  {
                      img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                      title:'PHP从入坑到入土！',
                      author:'陈妍',
                      sort:'实用教程',
                      time:'2019-9-6'
                  },
                  {
                      img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                      title:'PHP从入坑到入土！',
                      author:'陈妍',
                      sort:'实用教程',
                      time:'2019-9-6'
                  },
                  {
                      img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                      title:'PHP从入坑到入土！',
                      author:'陈妍',
                      sort:'实用教程',
                      time:'2019-9-6'
                  },
                  {
                      img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                      title:'PHP从入坑到入土！',
                      author:'陈妍',
                      sort:'实用教程',
                      time:'2019-9-6'
                  }
              ],
                restaurants: [],
                state1: '',
                state2: ''
            };
        },
        //搜索框输入后弹出建议
        methods: {
            loadAll() {
                //假数据
                return [
                    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                    { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                    { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                    { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                    { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                    { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                    { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                    { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                    { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
                    { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
                    { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
                    { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
                    { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
                    { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                    { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
                    { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
                    { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
                    { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                    { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
                    { "value": "钱记", "address": "上海市长宁区天山西路" },
                    { "value": "壹杯加", "address": "上海市长宁区通协路" },
                    { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
                    { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
                    { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
                    { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
                    { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
                    { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
                    { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
                    { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
                    { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
                    { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
                    { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
                    { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
                    { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
                    { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
                    { "value": "浏阳蒸菜", "address": "天山西路430号" },
                    { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
                    { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
                    { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
                    { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
                    { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
                    { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
                    { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
                    { "value": "阳阳麻辣烫", "address": "天山西路389号" },
                    { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
                ];
            },
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }

</script>

<style scoped>
  .box01{
    width: 1200px;
    height: 650px;
    overflow: hidden;
  }
  .share{
    width: 1200px;
    height: 650px;
    margin: 0 auto;
  }
  .share_title{
    font-size: 35px;
  margin-bottom: 30px;
    text-align: center;
  }
  .share_left{
    width: 1100px;
    height: 600px;
    margin-left: 120px;
  }
  .share_card{
    height: 270px;
    width: 300px;
    float: left;


  }
  .share_care_content{
    padding: 10px 10px 0 10px;
    color: #201e1e;
  }
  .share_card_author{
    font-size: 14px;
    float: right;
  }
  .share_card_author_by{
    color: #77fad9;
  }
  .share_card_sort{
    font-size: 14px;
    float: left;
    position: relative;
    top: 18px;
  }
  .share_card_time{
    font-size: 13px;
    float: right;
    position: relative;
    top: 20px;
    left: 48px;
  }

  .share_card:nth-child(2),
  .share_card:nth-child(5){
    margin: 0 28px;
  }

  .share_card:nth-child(4),
  .share_card:nth-child(5),
  .share_card:nth-child(6){
    margin-top: 20px;
  }
  .image {
    width: 300px;
    height: 200px;
    display: block;
  }
  .share_right{
    width: 300px;
    height: 600px;
    float: right;
  }
  .share_search{
    border-radius: 30px;
    width: 270px;
    float: right;
  }
  .share_essay{
    width: 250px;
    height: 500px;
    margin: 80px 0 0 30px;
    background: url("../../../../assets/web_img/share-icon.gif") no-repeat;
  }
  .share_essay_title{
    margin-left: 20px;
    display: block;
    padding-top: 4px;
    color: #595959;
    font-size: 20px;
    padding-bottom: 15px;
  }
  .share_essay_sort{
    margin: 40px 0 0 20px;
    width: 250px;
  }
  .link01{
    display: block;
    margin: -20px 0 -12px 0;
    color: #8e8e8e;
  }
  a:visited, a:link{
    text-decoration: none;
    color: #8e8e8e;
  }
  a:hover{
    color: #d73d07;
  }

</style>
