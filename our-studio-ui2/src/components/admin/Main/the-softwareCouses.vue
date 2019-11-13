<template>
  <div id="awards">
    <el-table
      class="el-table"
      :data="list.filter(data => !search || data.name.toLowerCase().includes(this.search.toLowerCase()) || (data.ID == search) || (data.access == search)).slice(ye*10-10,ye*10)"
      style="width: 100%">
      <el-table-column
        label="ID"
        prop="ID"
        width="120px">
      </el-table-column>
      <el-table-column
        label="标题"
        prop="title"
        width="200px">
      </el-table-column>
      <el-table-column
        label="分类"
        prop="classify">
      </el-table-column>
      <el-table-column
        label="阅读量"
        prop="reading_quantity">
      </el-table-column>
      <el-table-column
        label="作者"
        prop="name">
      </el-table-column>
      <el-table-column
        label="权限"
        prop="access">
      </el-table-column>
      <el-table-column
        label="发布时间"
        prop="release_time">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="updata(scope.$index, scope.row)">修改</el-button>
          <el-popover
            placement="top"
            width="160"
            v-model="scope.row.visible"
            @click="">
            <p>确定要删除该数据吗</p>
            <div style="text-align: right; margin: 0">
              <el-button type="text" size="mini"  @click="amend(scope.$index, scope.row)">确定</el-button>
              <el-button  type="primary" size="mini" @click="scope.row.visible = false">取消</el-button>
            </div>
            <el-button
              size="mini"
              slot="reference"
              type="danger">删除</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <div class="el-add-button">
      <el-button type="primary" plain @click="insert()">添加</el-button>
    </div>
    <p v-if="endye" style="color: #ada9af; height: 20px; line-height:20px;">没有更多啦！</p>
    <!--以下是弹框放置位置-->
    <el-dialog
      :title="formLabelAlign.title1"
      :visible.sync="dialogVisible1"
      width="80%"
      :before-close="handleClose1">
      <div style="margin: 10px; line-height: 20px !important;"></div>
      <el-form :inline="true" :model="formLabelAlign" class="demo-form-inline">
        <h2 v-if="formLabelAlign.isupdata" style="margin: -20px auto 5px">ID:{{formLabelAlign.ID}}</h2>
          <el-form-item label="标题">
              <el-input v-model="formLabelAlign.title" placeholder="（http/https）：//xxxxxxxxx.xxxx"></el-input>
          </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="formLabelAlign.link" placeholder="（http/https）：//xxxxxxxxx.xxxx"></el-input>
        </el-form-item>
        <el-form-item label="图标">
          <el-input v-model="formLabelAlign.icon" placeholder="xxxx"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="formLabelAlign.name" placeholder="xxxx"></el-input>
        </el-form-item>
          <el-form-item label="权限" v-if="formLabelAlign.isupdata">
              <el-input v-model="formLabelAlign.access" placeholder="xxxx"></el-input>
          </el-form-item>
          <el-form-item label="阅读量" v-if="formLabelAlign.isupdata">
              <el-input v-model="formLabelAlign.reading_quantity" placeholder="xxxx"></el-input>
          </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="formLabelAlign.classify" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="formLabelAlign.isupdata" label="发布时间">
          <el-input v-model="formLabelAlign.release_time" placeholder="xxxx"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-popover
          placement="top"
          width="160"
          v-model="nodata"
          @click="">
            <p>{{tisi}}</p>
            <div style="text-align: right; margin: 0">
              <el-button type="text" size="mini"  @click="dialogVisible1 = false;nodata = false">确定</el-button>
              <el-button type="primary" size="mini" @click="nodata = false">取消</el-button>
            </div>
            <el-button
              @click=" tisi= formLabelAlign.isupdata?'确定放弃修改吗？':'确定放弃添加吗？' "
              slot="reference">取 消</el-button>
        </el-popover>
    <el-button v-if="formLabelAlign.isupdata" type="info" @click="updatareste">重置</el-button>
        <el-popover
          placement="top"
          width="160"
          v-model="okdata"
          @click="">
            <p>{{tisi}}</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="okdata = false">取消</el-button>
              <el-button type="primary" size="mini" @click="okdata = false ;okupdate()">确定</el-button>
            </div>
            <el-button
              type="primary"
              @click=" tisi= formLabelAlign.isupdata?'确定提交修改吗？':'确定提交添加吗？' "
              slot="reference">确 定</el-button>
        </el-popover>
  </span>
    </el-dialog>
  </div>
</template>


<script>
    import jiaohu from "../jiaohu"
    import {amend, open2, open4, updatadataF, insertdataF} from "../../../public/methods/adminFun";
    export default {
        name: "the-softwareCoures",
        data() {
            return{
                labelPosition: 'left',
                formLabelAlign: {
                    ID: '',
                    link: '',
                    icon:'',
                    classify: '',
                    title: '',
                    reading_quantity: '',
                    name: '',
                    access: '',
                    release_time: '',
                    title1: '添加软件教程',
                    isupdata: false,//判断是否是修改数据，用于v-if调节表单项，默认不是，因为添加数据时的表单项在修改数据时都存在
                },
                updatadata:'',
                okdata:'',
                tisi:"",//提示
                nodata:'',
                list:[],
                metadata:[],
                search:'',
                ye:1,
                api:"softwarecoures",
                endye:0,
                dialogTableVisible: false,
                dialogFormVisible: false,
                formLabelWidth: '120px',
                dialogVisible1:false,
                options: [{
                    value: '快捷键',
                    label: '快捷键'
                }, {
                    value: '基本设置',
                    label: '基本设置'
                }, {
                    value: '软件特色',
                    label: '软件特色'
                }],
                    value: ''
            }
        },
        created() {
            let loadingInstance = this.$loading({text: "数据加载中", fullscreen: false,});
            this.axios.get('http://49.234.9.206/Gaindata/selet_mysql.php', {
                params: {
                    list: this.api
                }
            })
                .then(body => {//请求成功
                    if (body.data.status_code === 1009) {//状态码正常
                        this.list = JSON.parse(JSON.stringify(body.data.datas));//深度拷贝
                        this.metadata = body.data.datas;//存放真实数据
                        this.end(this.ye);
                        jiaohu.$emit("len", this.list.filter(data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase()) || (data.ID == this.search) || (data.access == this.search)));
                        jiaohu.$on("ye", (ye) => {
                            this.ye = ye;
                        });
                        this.open2("加载成功");
                        this.Deposit();
                        this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                            loadingInstance.close();
                        })
                    } else {//状态码异常
                        this.open4("加载失败");
                    }

                })
                .catch(error => {
                    //请求失败
                    this.$nextTick(() => {
                        loadingInstance.close();
                    });
                    this.open4("加载失败");
                    console.log(error);
                });
        },
        mounted() {
            console.log(!null);
        },
        methods : {
            amend,//删除方法
            updatadataF,//修改方法
            insertdataF,//添加方法
            open2,
            open4,
            updata(index, row) {
                this.dialogVisible1 = true;//打开对话框
                this.formLabelAlign.isupdata = true;//是修改对话框
                this.formLabelAlign.title1 = '修改信息';
                this.updatadata = this.metadata.filter(data => data.ID == row.ID)[0];//提取元数据
                //对表单赋初值
                this.formLabelAlign.ID = this.updatadata.ID;
                this.formLabelAlign.link = this.updatadata.link;
                this.formLabelAlign.icon = this.updatadata.icon;
                this.formLabelAlign.classify = this.updatadata.classify;
                this.formLabelAlign.title = this.updatadata.title;
                this.formLabelAlign.reading_quantity = this.updatadata.reading_quantity;
                this.formLabelAlign.name = this.updatadata.name;
                this.formLabelAlign.access = this.updatadata.access;
                this.formLabelAlign.release_time = this.updatadata.release_time;
            },
            updatareste(){
                //对表单重新赋值
                this.formLabelAlign.reading_quantity = this.updatadata.reading_quantity;
                this.formLabelAlign.link = this.updatadata.link;
                this.formLabelAlign.icon = this.updatadata.icon;
                this.formLabelAlign.classify = this.updatadata.classify;
                this.formLabelAlign.title = this.updatadata.title;
                this.formLabelAlign.name = this.updatadata.name;
                this.formLabelAlign.release_time = this.updatadata.release_time;
            },
            okupdate(){
                this.dialogVisible1 = false;//关闭对话框
                if (this.formLabelAlign.isupdata) {
                    //发送修改请求
                    this.updatadataF('http://49.234.9.206/Gaindata/updata_softwareCoures.php',{
                        ID : this.formLabelAlign.ID,
                        title : this.formLabelAlign.title,
                        name : this.formLabelAlign.name,
                        link :this.formLabelAlign.link,
                        release_time : this.formLabelAlign.release_time,
                        reading_quantity : this.formLabelAlign.reading_quantity,
                        classify : this.formLabelAlign.classify,
                        access : this.formLabelAlign.access,
                        icon : this.formLabelAlign.icon,
                    });
                }else {
                    //发送添加请求
                    this.insertdataF('http://49.234.9.206/Gaindata/insert_softwareCoures.php',{
                        title : this.formLabelAlign.title,
                        name : this.formLabelAlign.name,
                        link : this.formLabelAlign.link,
                        icon : this.formLabelAlign.icon,
                        classify : this.formLabelAlign.classify,
                    });
                }

            },
            insert(){
                this.dialogVisible1 = true;//打开对话框
                this.formLabelAlign.isupdata = false;//不是修改对话框
                //清除表单初值
                this.formLabelAlign = {
                    title: '',
                    name: '',
                    link: '',
                    release_time: '',
                    icon: '',
                    classify: '',
                    title1: '添加教程',
                    isupdata: false,
                };
            },
            handleClose1(done){
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            handleDelete(index, row) {
            },
            end(ye) {
                var i = (this.list.filter(data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase()) || (data.ID == this.search) || (data.access == this.search))).length / 10;
                if (ye > i) {
                    this.endye = true;
                } else {
                    this.endye = false;
                }
            },
            Deposit(){
                for (var i = 0; i < this.list.length; i++) {
                    this.$set(this.list[i], 'visible', false);
                    //对展示数据的长度进行处理
                    if (this.list[i].link.length > 6) {
                        this.list[i].link = this.list[i].link.substr(0,6) + "...";
                    }
                    if (this.list[i].icon.length > 12) {
                        this.list[i].icon = this.list[i].icon.substr(0,12) + "...";
                    }
                    if (this.list[i].title.length > 6) {
                        this.list[i].title = this.list[i].title.substr(0,6) + "...";
                    }
                }
            }
        },
        beforeUpdate(){
            jiaohu.$emit("len", this.list.filter(data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase()) || (data.ID == this.search) || (data.access == this.search)));
            this.end(this.ye);
        }
    }

</script>

<style scoped>

</style>
