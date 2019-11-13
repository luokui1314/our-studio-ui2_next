<template>
    <div>
        <div class="el-form-box">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="code-label" label="验证码" prop="code">
                    <el-input class="code" type="text" v-model="ruleForm.code" autocomplete="off"></el-input>
                    <span class="code-in"><img src="http://49.234.9.206/LoginAndSignin/code.png" id="img"></span>
                    <span class="updataCode" @click="updataVerificationCode()" >点击换一换</span>
                </el-form-item>
                <p style="font-size: 12px;text-align: center;color: red;">{{loginError}}</p>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" :disabled="!ok" :loading="loadings">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {getVerificationCode, login} from '../../../.././public/methods/indexFun'
    export default {
        name: "login",
        data(){
            return{
                ruleForm: {
                    pass: '',
                    username: '',
                    code:'',
                },
                rules: {
                    pass: [
                        { validator: this.validatePass1, trigger: 'blur' }
                    ],
                    username: [
                        { validator: this.validatePass2, trigger: 'blur' }
                    ],
                    code: [
                        { validator: this.validatePass3, trigger: 'blur' }
                    ],
                },
                ok:false,
                code:'',//存放是否可以点击登录按钮
                loginError:'',//错误提示信息
                loadings:false//按钮是否为加载状态
            };
        },
        methods:{
            getVerificationCode,
            login,
            okbutton(){
                this.ok = ((this.ruleForm.pass !=="")&&(this.ruleForm.checkPass !=="")&&(this.ruleForm.code === this.code))
            },
            validatePass1(rule, value, callback){
                if (value === '') {
                    callback(new Error('请输入密码'));
                }else {
                    callback()
                }
            },
            validatePass2(rule, value, callback){
                if (value === '') {
                    callback(new Error('请输入用户名'));
                }else {
                    callback()
                }
            },
            validatePass3(rule, value, callback){
                if (value !== this.code) {
                    callback(new Error('验证码错误'));
                }else {
                    callback()
                }
            },
            updataVerificationCode(){
                this.getVerificationCode();//获取新的验证码
                this.ruleForm.code = '';//清空验证码表单
            },
            submitForm() {
                if(this.code === this.ruleForm.code){//验证码正确
                    //将用户名和密码提交到后台进行验证
                    this.login({
                        username: this.ruleForm.username,
                        password: this.ruleForm.pass
                    });
                }
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        created(){

        },
        mounted() {
            this.updataVerificationCode();
            for( let i = 0;i< document.getElementsByClassName('el-form-item__label').length; i++)
                document.getElementsByClassName('el-form-item__label')[i].style.color = "#FFF";
        },
        updated() {
            this.okbutton();
        }
    }
</script>

<style scoped>

    .el-form-box{
        width: 400px;
        height: auto;
        margin: 0 auto;
        padding: 80px 100px 30px 20px;
        position: relative;
        top: 100px;
        border-radius: 10px;
        background-color: rgba(255,255,255,0.1);
    }
    .code{
        width: 120px;
    }
    .updataCode{color: #FFF;
        position: absolute;
        margin-left: 90px;
        font-size: 12px;
        cursor:pointer;
        top: 10px;
    }
    .code-in{
        position: absolute;
        left: 117px;
        top: 1px;
        text-align: center;
    }
</style>
