<template>
    <div>
        <div class="el-form-box">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="邮箱" prop="email">
                    <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="code-label" label="验证码" prop="code">
                    <el-input class="code" type="text" v-model="ruleForm.code" autocomplete="off"></el-input>
                    <span class="code-in"><img src="http://49.234.9.206/LoginAndSignin/code.png" id="img"></span>
                    <span class="updataCode" @click="updataVerificationCode()" >点击换一换</span>
                </el-form-item>
                <p style="font-size: 12px;text-align: center;color: red;">{{loginError}}</p>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" :disabled="!ok" :loading="loadings">注册</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {getVerificationCode, sign} from '../../../.././public/methods/indexFun'
    export default {
        name: "sign",
        data(){
            return{
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    email: '',
                    username: '',
                    code: '',
                },
                okValue: {
                    okPass: false,
                    okCheckPass: false,
                    okEmail: false,
                    okUsername: false,
                    okCode: false,
                },
                rules: {
                    pass: [
                        { validator: this.validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: this.validatePass2, trigger: 'blur' }
                    ],
                    username: [
                        { validator: this.validatePass3, trigger: 'blur' }
                    ],
                    email: [
                        { validator: this.validatePass4, trigger: 'blur' }
                    ],
                    code: [
                        { validator: this.validatePass6, trigger: 'blur' }
                    ],

                },
                code:'',
                ok:false,//是否可以点击登录按钮
                loadings:false,//按钮是否为加载状态
                loginError:'',//错误提示信息
            };
        },
        methods:{
            getVerificationCode,
            sign,
            okbutton(){
                //检测密码
                let pass = !( (this.ruleForm.pass.length < 8) || (this.ruleForm.pass.length > 20) || !this.ruleForm.pass.match(/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/))
                //检测确认密码
                let checkPass = ( this.ruleForm.checkPass === this.ruleForm.pass)
                //检测用户名
                let username = !( (this.ruleForm.username.length > 20)|| (this.ruleForm.username.length < 6) || !this.ruleForm.username.match(/^[a-zA-Z0-9_!@#$%^&*]{6,20}/))
                //检测邮箱
                let email = (this.ruleForm.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
                //检测验证码
                let code = (this.ruleForm.code === this.code)
                this.ok = (pass && checkPass && username && email && code && this.okValue.okEmail && this.okValue.okUsername);
            },
            updataVerificationCode(){
                this.getVerificationCode();//获取新的验证码
                this.ruleForm.code = '';//清空验证码表单
            },
            submitForm() {
                //注册
                this.sign({
                    username: this.ruleForm.username,
                    email: this.ruleForm.email,
                    password: this.ruleForm.pass
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            validatePass(rule, value, callback){//密码正则表达式验证
                if (value === '') {
                    callback(new Error('请输入密码'));
                }else if (value.length < 8 || value.length > 20 ) {
                    callback(new Error('密码长度为 8 ~ 20 位'));
                }else if (!value.match(/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/)) {
                    callback(new Error('至少由数字、字母、特殊字符中的任意这两种组合'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                    this.okValue.okPass = true;
                }
            },
            validatePass2(rule, value, callback){//确认密码正则表达式验证
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                    this.okValue.okCheckPass = true;
                }
            },
            validatePass3(rule, value, callback){//确认密码正则表达式验证
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else if (value.length > 20 || value.length < 6) {
                    callback(new Error('长度为 6 ~ 20 位'));
                } else if(!value.match(/^[a-zA-Z0-9_!@#$%^&*]{6,20}/)){
                    callback(new Error('只能是数字、字母和_!@#$%^&*'));
                }else {
                    //判断用户名是否已经被注册
                    //发送验证请求
                    this.axios.get('http://49.234.9.206/LoginAndSignin/verify.php',{
                        params:{
                            list:'userinfo',
                            header:'username',
                            content:value
                        }
                    }).then(body => {
                        if(body.data.status_code === 1000){//不存在
                            callback();
                            this.okValue.okUsername = true;
                        }else {
                            callback(new Error('该用户名已被注册'));
                            this.okValue.okUsername = false;
                        }
                    }).catch(error => {

                    })
                }
            },
            validatePass4(rule, value, callback){//确认密码正则表达式验证
                if (value === '') {
                    callback(new Error('请输入邮箱'));
                } else if (!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                    callback(new Error('无法识别的邮箱'));
                } else {
                    //判断邮箱是否已经被注册
                    //发送验证请求
                    this.axios.get('http://49.234.9.206/LoginAndSignin/verify.php',{
                        params:{
                            list:'userinfo',
                            header:'email',
                            content:value
                        }
                    }).then(body => {
                        if(body.data.status_code === 1000){//不存在
                            callback();
                            this.okValue.okEmail = true;
                        }else {
                            callback(new Error('该邮件已被注册'));
                            this.okValue.okEmail = false;
                        }
                    }).catch(error => {

                    })
                }
            },
            validatePass6(rule, value, callback){
                if (value != this.code) {
                    callback(new Error('验证码错误'));
                }else {
                    callback();
                    this.okValue.okCode = true;
                }
            }
        },
        mounted() {
            this.updataVerificationCode();//获取验证码
            for( let i = 0;i< document.getElementsByClassName('el-form-item__label').length; i++)
                document.getElementsByClassName('el-form-item__label')[i].style.color = "#FFF";
        },
        updated() {
            //this.okbutton();
        },
        beforeUpdate() {
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
