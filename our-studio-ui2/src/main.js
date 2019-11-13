// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import Element from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import store from '../store'
import qs from 'qs'
import $ from 'jquery'

Vue.config.productionTip = false;
Vue.prototype.$qs = qs;
Vue.prototype.$ = $;
Vue.use(Element);
Vue.use(VueRouter);
Vue.use(VueAxios,axios);
Vue.use(VueCookies);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});


// 设置登录验证
router.beforeEach((to, from, next) => {
    //判断是否需要登录
    if (to.meta.needLogin){
        //需要登录
        console.log("该路由需要登陆");
        //判断是否已经登录
        if (!store.state.isLogin){
            //未登录
            console.log("还没有登录");
            //判断当前是否是登录界面
            if (to.path !== '/index/login') {
                //不是登录界面,
                //转跳路由到登录界面
                console.log("目前不是登陆界面");
                console.log("正在向登陆界面转跳");
                next({ path: '/index/login' })
            } else {
                //当前是登录界面，正常转跳
                console.log("目前是登录界面，继续当前转跳");
                next()
            }
        }else {
            //已经登录，正常转跳
            console.log("已经登录，继续当前转跳");
            next()
        }
    }else {
        //不需要登录，正常转跳
        console.log("不需要登录，继续当前转跳");
        next()
    }
});
