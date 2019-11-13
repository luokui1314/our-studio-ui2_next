<template>
    <div>
        <Navigation></Navigation>
        <h1>正在紧张规划中111</h1>
    </div>
</template>

<script>
    import Navigation from '../the-navigation'
    export default {
        name: "the-links",
        components: {Navigation},
        data(){
            return{
                verificationCode:''//用来存放正确的验证码，验证验证码是否正确是直接验证value是否等于此值
            }
        },
        methods:{
            updataVerificationCode(){
                //发送请求
                this.axios.get('http://49.234.9.206/LoginAndSignin/verificationCode.php')
                    .then(body => {//请求成功
                        this.code = body.data;//存放正确的验证码
                        document.getElementById("verificationCode").src="http://49.234.9.206/LoginAndSignin/code.png?"+Math.random();//img是img标签的id，自己取
                    })
                    .catch(error => {//请求失败
                        console.log("获取新的验证码失败，原因是" + error);
                    });
            }
        }
    }
</script>

<style scoped>

</style>
