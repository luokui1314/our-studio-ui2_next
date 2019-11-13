import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        //状态
        isLogin: false,//是否已经登录
        scrolltop:0,//滚动条
        userinfo:{//用户信息
            username:'',//用户名
            ID:'',//ID
            email:'',//邮件
            nickname:'',//昵称
            head_portrait:'',//头像
            creation_time:'',//创建时间
            access:''//权限
        }
    },
    mutations:{
        //修改状态
        updataIsLogin(state,data) {//修改登录状态
            state.isLogin =  data;
        },
        updatascrollTop(state, scrolltop){//获取进度条位置
            state.scrolltop = scrolltop;
        },
        updataUserInfo(state,UserInfo){//存放用户信息
            state.userinfo.username = UserInfo.username;
            state.userinfo.ID = UserInfo.ID;
            state.userinfo.email = UserInfo.email;
            state.userinfo.nickname = UserInfo.nickname;
            state.userinfo.head_portrait = UserInfo.head_portrait;
            state.userinfo.creation_time = UserInfo.creation_time;
            state.userinfo.access = UserInfo.access;
        },
        logout(state){//清除登录数据
            state.userinfo.username = '';
            state.userinfo.ID = '';
            state.userinfo.email = '';
            state.userinfo.nickname = '';
            state.userinfo.head_portrait = '';
            state.userinfo.creation_time = '';
            state.userinfo.access = '';
            state.isLogin =  null;
        }

    },
    actions:{
        //操作
    },
    getters:{
        //数据处理
    },
    modules:{

    }
});
//导出store
export default store
