<template>
    <div id="software">
        <el-table
                :data="list.filter(data => !this.search || data.username.toLowerCase().includes(this.search.toLowerCase()) || data.nickname.toLowerCase().includes(this.search.toLowerCase()) || (data.ID == this.search) || (data.email == this.search) || (data.access == this.search)).slice(ye*10-10,ye*10)"
                style="width: 100%">
            <el-table-column
                    label="ID"
                    prop="ID"
                    width="120px">
            </el-table-column>
            <el-table-column
                    label="用户名"
                    prop="username">
            </el-table-column>
            <el-table-column
                    label="密码"
                    prop="password">
            </el-table-column>
            <el-table-column
                    label="邮箱"
                    prop="email">
            </el-table-column>
            <el-table-column
                    label="昵称"
                    prop="nickname">
            </el-table-column>
            <el-table-column
                    label="创建时间"
                    prop="creation_time">
            </el-table-column>
            <el-table-column
                    label="权限"
                    prop="access">
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
                </template>
            </el-table-column>
        </el-table>
        <p v-if="endye" style="color: #ada9af; height: 20px; line-height:20px;">没有更多啦！</p>
        <!--以下是弹框放置位置-->
        <el-dialog
                title="修改用户信息"
                :visible.sync="dialogVisible1"
                width="80%"
                :before-close="handleClose1">
            <div style="margin: 10px; line-height: 20px !important;"></div>
            <el-form :inline="true" :model="formLabelAlign" class="demo-form-inline">
                <h2 style="margin: -20px auto 5px">ID:{{formLabelAlign.ID}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户名:{{formLabelAlign.username}}</h2>
                <el-form-item label="昵称">
                    <el-input v-model="formLabelAlign.nickname" placeholder="xxxxxx"></el-input>
                </el-form-item>
                <el-form-item label="头像">
                    <el-input v-model="formLabelAlign.head_portrait" placeholder="（http/https）：//xxxxxxxxx.xxxx"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formLabelAlign.password" placeholder="xxxx"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="formLabelAlign.email" placeholder="x"></el-input>
                </el-form-item>
                <el-form-item label="权限">
                    <el-input v-model="formLabelAlign.access" placeholder="x"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
        <el-popover
                placement="top"
                width="160"
                v-model="nodata"
                @click="">
            <p>确定放弃修改吗</p>
            <div style="text-align: right; margin: 0">
              <el-button type="text" size="mini"  @click="dialogVisible1 = false;nodata = false">确定</el-button>
              <el-button type="primary" size="mini" @click="nodata = false">取消</el-button>
            </div>
            <el-button
                    slot="reference">取 消</el-button>
        </el-popover>
    <el-button v-if="formLabelAlign.isupdata" type="info" @click="updatareste">重置</el-button>
        <el-popover
                placement="top"
                width="160"
                v-model="okdata"
                @click="">
            <p>确定提交修改吗</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="okdata = false">取消</el-button>
              <el-button type="primary" size="mini" @click="okdata = false ;okupdate()">确定</el-button>
            </div>
            <el-button
                    type="primary"
                    slot="reference">确 定</el-button>
        </el-popover>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    import jiaohu from "../jiaohu"
    import {amend, open2, open4, updatadataF} from "../../../public/methods/adminFun";
    export default {
        name: "theSoftware",
        data(){
            return{
                labelPosition: 'left',
                formLabelAlign: {
                    ID: '',
                    username: '',
                    nickname: '',
                    head_portrait: '',
                    password: '',
                    email: '',
                    access: '',
                },
                updatadata:'',
                okdata:'',
                nodata:'',
                list:[],
                metadata:[],
                search:'',
                ye:1,
                api:"userinfo",
                endye:0,
                dialogTableVisible: false,
                dialogFormVisible: false,
                formLabelWidth: '120px',
                dialogVisible1:false
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
        },
        methods : {
            amend,//删除方法
            updatadataF,//修改方法
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
                this.updatadata = this.metadata.filter(data => data.ID == row.ID)[0];//提取元数据
                //对表单赋初值
                this.formLabelAlign.ID = this.updatadata.ID;
                this.formLabelAlign.username = this.updatadata.username;
                this.formLabelAlign.access = this.updatadata.access;
                this.formLabelAlign.nickname = this.updatadata.nickname;
                this.formLabelAlign.head_portrait = this.updatadata.head_portrait;
                this.formLabelAlign.password = this.updatadata.password;
                this.formLabelAlign.email = this.updatadata.email;
            },
            updatareste(){
                //对表单重新赋值
                this.formLabelAlign.nickname = this.updatadata.nickname;
                this.formLabelAlign.access = this.updatadata.access;
                this.formLabelAlign.head_portrait = this.updatadata.head_portrait;
                this.formLabelAlign.password = this.updatadata.password;
                this.formLabelAlign.email = this.updatadata.email;
            },
            okupdate(){
                this.dialogVisible1 = false;//关闭对话框
                    //发送修改请求
                    this.updatadataF('http://49.234.9.206/Gaindata/updata_userinfo.php',{
                        ID : this.formLabelAlign.ID,
                        nickname : this.formLabelAlign.nickname,
                        access : this.formLabelAlign.access,
                        head_portrait : this.formLabelAlign.head_portrait,
                        password :this.formLabelAlign.password,
                        email : this.formLabelAlign.email,
                    });

            },
            handleDelete(index, row) {
            },
            end(ye) {
                var i = (this.list.filter(data => !this.search || data.username.toLowerCase().includes(this.search.toLowerCase()) || data.nickname.toLowerCase().includes(this.search.toLowerCase()) || (data.ID == this.search) || (data.email == this.search) || (data.access == this.search))).length / 10;
                if (ye > i) {
                    this.endye = true;
                } else {
                    this.endye = false;
                }
            },
            Deposit(){
            }
        },
        beforeUpdate(){
            jiaohu.$emit("len", this.list.filter(data => !this.search || data.username.toLowerCase().includes(this.search.toLowerCase()) || data.nickname.toLowerCase().includes(this.search.toLowerCase()) || (data.ID == this.search) || (data.email == this.search) || (data.access == this.search)));
            this.end(this.ye);
        }
    }
</script>

<style scoped>

</style>
