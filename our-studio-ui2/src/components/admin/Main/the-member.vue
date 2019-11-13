<template>
    <div id="software">
        <el-table
                :data="list.filter(data => !search || (data.age == this.search) || (data.name == this.search) || (data.ID == this.search) || (data.good == this.search) || (data.type == this.search)).slice(ye*10-10,ye*10)"
                style="width: 100%">
            <el-table-column
                    label="ID"
                    prop="ID"
                    width="120px">
            </el-table-column>
            <el-table-column
                    label="姓名"
                    prop="name">
            </el-table-column>
            <el-table-column
                    label="头像"
                    prop="imgs">
            </el-table-column>
            <el-table-column
                    label="年龄"
                    prop="age">
            </el-table-column>
            <el-table-column
                    label="展示级别"
                    prop="good">
            </el-table-column>
            <el-table-column
                    label="成员类型"
                    prop="type">
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
                            <el-button size="mini" type="text" @click="amend(scope.$index, scope.row)">确定</el-button>
                            <el-button type="primary" size="mini" @click="scope.row.visible = false">取消</el-button>
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
            <el-button type="primary" plain @click="insert()">添加按钮</el-button>
        </div>
        <p v-if="endye" style="color: #ada9af; height: 20px; line-height:20px;">没有更多啦！</p>
        <!--以下是弹框放置位置-->
        <el-dialog
                :title="formLabelAlign.title"
                :visible.sync="dialogVisible1"
                width="80%"
                :before-close="handleClose1">
            <div style="margin: 10px; line-height: 20px !important;"></div>
            <el-form :inline="true" :model="formLabelAlign" class="demo-form-inline">
                <h2 v-if="formLabelAlign.isupdata" style="margin: -20px auto 5px">ID:{{formLabelAlign.ID}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;成员信息创建时间：{{formLabelAlign.time}}</h2>
                <el-form-item label="姓名">
                    <el-input v-model="formLabelAlign.name" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="formLabelAlign.age" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="成员类型">
                    <el-select v-model="formLabelAlign.type" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="头像">
                    <el-input v-model="formLabelAlign.imgs" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="座右铭">
                    <el-input v-model="formLabelAlign.motto" placeholder=""></el-input>
                </el-form-item>
                <el-form-item  label="展示级别">
                    <el-input v-model="formLabelAlign.good" placeholder=""></el-input>
                </el-form-item>
                <p>	个人简介：<el-input v-model="formLabelAlign.intro" placeholder="请输入内容"></el-input></p>

                <br><br>
                <p>	爱好：<el-input v-model="formLabelAlign.interest" placeholder="请输入内容"></el-input></p>

                <br><br>
                <p> 擅长：<el-input v-model="formLabelAlign.adept" placeholder="请输入内容"></el-input></p>

                <br><br>
                <p> 住址：<el-input v-model="formLabelAlign.address" placeholder="请输入内容"></el-input></p>

                <br><br>
            </el-form>
            <span slot="footer" class="dialog-footer">
        <el-popover
                placement="top"
                width="160"
                v-model="nodata"
                @click="">
            <p>{{tisi}}</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="dialogVisible1 = false;nodata = false">确定</el-button>
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
        name: "theMember",
        data(){
            return{
                labelPosition: 'left',
                formLabelAlign: {
                    ID: '',
                    name: '',
                    imgs: '',
                    motto: '',
                    age: '',
                    intro: '',
                    interest: '',
                    adept: '',
                    good: '',
                    address: '',
                    type:'',
                    time:'',
                    title: '添加成员信息',
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
                api:"member",
                endye:0,
                dialogTableVisible: false,
                dialogFormVisible: false,
                formLabelWidth: '120px',
                dialogVisible1:false,
                options: [{
                    value: '普通成员',
                    label: '普通成员'
                }, {
                    value: '主要成员',
                    label: '主要成员'
                }, {
                    value: '核心成员',
                    label: '核心成员'
                }],
            }
        },
        created() {
            let loadingInstance = this.$loading({text: "数据加载中", fullscreen: false,});
            this.axios.get('http://49.234.9.206/Gaindata/selet_mysql.php', {
                params: {
                    list: "member"
                }
            })
                .then(body => {//请求成功
                    if (body.data.status_code == 1009) {//状态码正常
                        this.list = JSON.parse(JSON.stringify(body.data.datas));//深度拷贝
                        this.metadata = body.data.datas;//存放真实数据
                        this.end(this.ye);
                        jiaohu.$emit("len", this.list.filter(data => !this.search || (data.age == this.search) || (data.name == this.search) || (data.ID == this.search) || (data.good == this.search) || (data.type == this.search)));
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
        methods : {

            amend,//删除方法
            updatadataF,//修改方法
            insertdataF,//添加方法
            open2,
            open4,
            handleClose1(done){
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            updata(index, row) {
                this.dialogVisible1 = true;//打开对话框
                this.formLabelAlign.isupdata = true;//是修改对话框
                this.formLabelAlign.title = '修改成员信息';
                this.updatadata = this.metadata.filter(data => data.ID == row.ID)[0];//提取元数据
                //对表单赋初值
                this.formLabelAlign.ID = this.updatadata.ID;
                this.formLabelAlign.name = this.updatadata.name;
                this.formLabelAlign.time = this.updatadata.time;
                this.formLabelAlign.type = this.updatadata.type;
                this.formLabelAlign.imgs = this.updatadata.imgs;
                this.formLabelAlign.motto = this.updatadata.motto;
                this.formLabelAlign.age = this.updatadata.age;
                this.formLabelAlign.intro = this.updatadata.intro;
                this.formLabelAlign.interest = this.updatadata.interest;
                this.formLabelAlign.adept = this.updatadata.adept;
                this.formLabelAlign.good = this.updatadata.good;
                this.formLabelAlign.address = this.updatadata.address;
            },
            updatareste(){
                //对表单重新赋值
                this.formLabelAlign.name = this.updatadata.name;
                this.formLabelAlign.type = this.updatadata.type;
                this.formLabelAlign.imgs = this.updatadata.imgs;
                this.formLabelAlign.motto = this.updatadata.motto;
                this.formLabelAlign.age = this.updatadata.age;
                this.formLabelAlign.intro = this.updatadata.intro;
                this.formLabelAlign.interest = this.updatadata.interest;
                this.formLabelAlign.adept = this.updatadata.adept;
                this.formLabelAlign.good = this.updatadata.good;
                this.formLabelAlign.address = this.updatadata.address;
            },
            okupdate(){
                this.dialogVisible1 = false;//关闭对话框
                if (this.formLabelAlign.isupdata) {
                    //发送修改请求
                    this.updatadataF('http://49.234.9.206/Gaindata/updata_member.php',{
                        ID : this.formLabelAlign.ID,
                        name : this.formLabelAlign.name,
                        time : this.formLabelAlign.time,
                        type : this.formLabelAlign.type,
                        imgs : this.formLabelAlign.imgs,
                        age :this.formLabelAlign.age,
                        intro : this.formLabelAlign.intro,
                        interest : this.formLabelAlign.interest,
                        adept : this.formLabelAlign.adept,
                        good : this.formLabelAlign.good,
                        address : this.formLabelAlign.address,
                        motto : this.formLabelAlign.motto,
                    });
                }else {
                    //发送添加请求
                    this.insertdataF('http://49.234.9.206/Gaindata/insert_member.php',{
                        name : this.formLabelAlign.name,
                        time : this.formLabelAlign.time,
                        imgs : this.formLabelAlign.imgs,
                        type : this.formLabelAlign.type,
                        age :this.formLabelAlign.age,
                        intro : this.formLabelAlign.intro,
                        interest : this.formLabelAlign.interest,
                        adept : this.formLabelAlign.adept,
                        good : this.formLabelAlign.good,
                        address : this.formLabelAlign.address,
                        motto : this.formLabelAlign.motto,
                    });
                }

            },
            insert(){
                this.dialogVisible1 = true;//打开对话框
                this.formLabelAlign.isupdata = false;//不是修改对话框
                //清除表单初值
                this.formLabelAlign = {
                    ID: '',
                    name: '',
                    imgs: '',
                    motto: '',
                    age: '',
                    intro: '',
                    interest: '',
                    adept: '',
                    good: '',
                    type: '普通成员',
                    time: '',
                    address: '',
                    title: '添加成员信息',
                    isupdata: false,
                };
            },
            handleDelete(index, row) {
            },
            end(ye) {
                var i = (this.list.filter(data => !this.search || (data.age == this.search) || (data.name == this.search) || (data.ID == this.search) || (data.good == this.search) || (data.type == this.search))).length / 10;
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
                    if (this.list[i].imgs.length > 10) {
                        this.list[i].imgs = this.list[i].imgs.substr(0,10) + "...";
                    }
                }
            }
        },
        beforeUpdate(){
            jiaohu.$emit("len", this.list.filter(data => !this.search || (data.age == this.search) || (data.name == this.search) || (data.ID == this.search) || (data.good == this.search) || (data.type == this.search)));
            this.end(this.ye);
        }
    }
</script>

<style scoped>

</style>
