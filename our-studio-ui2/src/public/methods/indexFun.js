//获取验证更新图片并且存放正确验证码到this.code中
export function getVerificationCode(){
    //发送请求
    this.axios.get('http://49.234.9.206/LoginAndSignin/verificationCode.php')
        .then(body => {//请求成功
            this.code = body.data;//存放正确的验证码
            document.getElementById("img").src="http://49.234.9.206/LoginAndSignin/code.png?"+Math.random();//img是img标签的id，自己取
        })
        .catch(error => {//请求失败
            console.log("获取新的验证码失败，原因是" + error);
        });
}



export function login(api){
    this.loadings = true;//按钮转换为加载状态
    this.ok = false;//按钮不可点击
    //发送登录请求
    this.axios.post('http://49.234.9.206/LoginAndSignin/userinfo_login.php',this.$qs.stringify(api))
        .then(body => {//登录请求成功
            console.log(body.data.status_code);
            if(body.data.status_code === 1104){//登录成功
                //登录成功并且将用户信息存放
                this.$store.commit('updataUserInfo',body.data.datas[0])
                //将用户信息存放到cookie
                this.$cookies.set('isLogin',true);
                this.$store.commit('updataIsLogin',this.$cookies.get('isLogin'))
                this.$cookies.set('username',body.data.datas[0].username);
                this.$cookies.set('ID',body.data.datas[0].ID);
                this.$cookies.set('email',body.data.datas[0].email);
                this.$cookies.set('nickname',body.data.datas[0].nickname);
                this.$cookies.set('head_portrait',body.data.datas[0].head_portrait);
                this.$cookies.set('creation_time',body.data.datas[0].creation_time);
                this.$cookies.set('access',body.data.datas[0].access);
                //转跳路由到首页
                this.$router.push({path:'/index/home'})
            }else if(body.data.status_code === 1103 || body.data.status_code === 1105) {//密码或用户名错误
                this.loginError = '用户名或密码错误';
                this.updataVerificationCode();//获取新的验证码
            }else {
                //未知错误
                this.loginError = '出现未知错误，请联系开发人员解决。';
                this.updataVerificationCode();//获取新的验证码
            }
            this.loadings = false;//按钮转换为正常状态
            this.ok = true;//按钮可点击
        })
        .catch(error => {
            //登陆请求失败
        });
}


export function sign(api){
    this.loadings = true;//按钮转换为加载状态
    this.ok = false;//按钮不可点击
    //发送注册请求
    this.axios.post('http://49.234.9.206/LoginAndSignin/userinfo_sign.php',this.$qs.stringify(api))
        .then(body => {//注册请求成功
            this.loadings = false;
            this.ok = true;
            switch (body.data.status_code) {
                case 1106://用户名已经存在
                    this.loginError = '用户名已经被注册了呢！';
                    break;
                case 1107://邮件已经存在
                    this.loginError = '邮件已经被注册了呢！';
                    break;
                case 1108://用户名和密码都已经存在
                    this.loginError = '用户名和邮件都已经被注册了呢！';
                    break;
                case 1109://注册成功
                    //登录成功并且将用户信息存放
                    this.$store.commit('updataUserInfo',body.data.datas[0])
                    //将用户信息存放到cookie
                    this.$cookies.set('isLogin',true);
                    this.$store.commit('updataIsLogin',this.$cookies.get('isLogin'))
                    this.$cookies.set('username',body.data.datas[0].username);
                    this.$cookies.set('ID',body.data.datas[0].ID);
                    this.$cookies.set('email',body.data.datas[0].email);
                    this.$cookies.set('nickname',body.data.datas[0].nickname);
                    this.$cookies.set('head_portrait',body.data.datas[0].head_portrait);
                    this.$cookies.set('creation_time',body.data.datas[0].creation_time);
                    this.$cookies.set('access',body.data.datas[0].access);
                    //转跳路由到首页
                    this.$router.push({path:'/index/home'})
                    break;
                default:
                    this.loginError = '出现未知错误，请联系开发人员解决';
                    break;
            }
        })
        .catch(error => {
            //注册请求失败
        });
}



export function newestuserinfo() {
    if((this.$cookies.get('isLogin') !== null) && (this.$cookies.get('isLogin') !== false)){
        //拿到用户最新数据
        //请求后台
        this.axios.get('http://49.234.9.206/LoginAndSignin/userinfo.php', {
            params: {
                ID: this.$cookies.get('ID')
            }
        })
            .then(body => {
                //将数据存放到cookie
                this.$cookies.set('username',body.data.datas[0].username);
                this.$cookies.set('ID',body.data.datas[0].ID);
                this.$cookies.set('email',body.data.datas[0].email);
                this.$cookies.set('nickname',body.data.datas[0].nickname);
                this.$cookies.set('head_portrait',body.data.datas[0].head_portrait);
                this.$cookies.set('creation_time',body.data.datas[0].creation_time);
                this.$cookies.set('access',body.data.datas[0].access);
                this.$store.commit('updataUserInfo',{
                    username:this.$cookies.get('username'),
                    ID:this.$cookies.get('ID'),
                    email:this.$cookies.get('email'),
                    nickname:this.$cookies.get('nickname'),
                    head_portrait:this.$cookies.get('head_portrait'),
                    creation_time:this.$cookies.get('creation_time'),
                    access:this.$cookies.get('access'),
                })
            })
    }
}
