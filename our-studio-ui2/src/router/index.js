import Vue from 'vue'
import Router from 'vue-router'
import WE from '../components/wangEditor/wE'
import theUserInfo from '../components/admin/Main/the-userInfo'
import theSoftware from '../components/admin/Main/the-software'
import theEssay from '../components/admin/Main/the-essay'
import theVideo from '../components/admin/Main/the-video'
import theAwards from '../components/admin/Main/the-awards'
import theSoftwareCouses from '../components/admin/Main/the-softwareCouses'
import theMember from '../components/admin/Main/the-member'
import Admin from '../components/admin/admin'
import Index from '../components/index/index'
import theHome from '../components/index/home/home'
import Login from '../components/index/loginAndSign/login'
import theLogin from '../components/index/loginAndSign/login/the-login'
import theSign from '../components/index/loginAndSign/login/the-sign'
import theUser from '../components/index/user/the-user'
import theLinks from '../components/index/links/the-links'
import theKnow from '../components/index/know/the-know'
import theContactUs from '../components/index/contactUs/the-contactUs'
import Information from '../components/index/information/information'
import theEssays from '../components/index/information/essay/the-essay'
import theSoftwares from '../components/index/information/software/the-software'
import theVideos from '../components/index/information/video/the-video'
import theSoftwareCoures from '../components/index/information/softwareCoures/the-softwareCoures'
import theInformations from '../components/index/information/information/the-information'
import theWebsite from '../components/index/information/website/the-website'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect:'/index'
        },
        {
            path: '/we',
            component:WE,
           /* meta: {
                needLogin: true,//是否需要登录
                access: 10//登录最低权限级别
            }*/
        },
        {
            path: '/admin',
            component:Admin,
            children:[
                {
                    path: '',
                    redirect:'the-userInfo',
                },
                {
                    path: 'the-userInfo',
                    name: 'theUserInfo',
                    component: theUserInfo,
                    /*meta: {
                        needLogin: true,//是否需要登录
                        access: 10//登录最低权限级别
                    }*/
                },{
                    path: 'the-software',
                    name: 'theSoftware',
                    component: theSoftware,
                   /* meta: {
                        needLogin: true,//是否需要登录
                        access: 10//登录最低权限级别
                    }*/
                },{
                    path: 'the-essay',
                    name: 'theEssay',
                    component: theEssay,
                    /*meta: {
                        needLogin: true,//是否需要登录
                        access: 10//登录最低权限级别
                    }*/
                },{
                    path: 'the-video',
                    name: 'theVideo',
                    component: theVideo,
                   /* meta: {
                        needLogin: true,//是否需要登录
                        access: 10//登录最低权限级别
                    }*/
                },{
                    path: 'the-awards',
                    name: 'theAwards',
                    component: theAwards,
                   /* meta: {
                        needLogin: true,//是否需要登录
                        access: 10//登录最低权限级别
                    }*/
                },{
                    path: 'the-member',
                    name: 'theMember',
                    component: theMember,
                   /* meta: {
                        needLogin: true,//是否需要登录
                        access: 10//登录最低权限级别
                    }*/
                },{
                    path: 'the-softwareCouses',
                    name: 'theSoftwareCouses',
                    component: theSoftwareCouses,
                    /* meta: {
                         needLogin: true,//是否需要登录
                         access: 10//登录最低权限级别
                     }*/
                }
            ]
        },
        {
            path: '/index',
            component: Index,
            children: [
                {
                    path: '',
                    redirect: 'home'
                },
                {
                    path: 'home',
                    name: 'theHome',
                    component: theHome,
                 /*   meta: {
                        needLogin: false,
                    }*/
                },
                {
                    path: 'login',
                    component: Login,
                    children:[
                        {
                            path: '/index/login',
                            name: 'theLogin',
                            component: theLogin,
                            /*meta: {
                                needLogin: false,
                            }*/
                        },{
                            path: '/index/sign',
                            name: 'theSign',
                            component: theSign,
                           /* meta: {
                                needLogin: false,
                            }*/
                        },
                    ]
                },
                {
                    path: 'user',
                    name: 'theUser',
                    component: theUser,
                   /* meta: {
                        needLogin: true,//是否需要登录
                        access: 10//登录最低权限级别
                    }*/
                },
                {
                    path: 'links',
                    name: 'theLinks',
                    component: theLinks,
                },
                {
                    path: 'know',
                    name: 'theKnow',
                    component: theKnow,
                },
                {
                    path: 'contactUS',
                    name: 'theContactUs',
                    component: theContactUs,
                },
                {
                    path: 'information',
                    component: Information,
                    children:[
                        {
                            path: '',
                            redirect:'essay',
                        },
                        {
                            path: 'essay',
                            name: 'the-Essay',
                            component: theEssays,
                        },
                        {
                            path: 'video',
                            name: 'the-Video',
                            component: theVideos,
                        },
                        {
                            path: 'software',
                            name: 'the-Software',
                            component: theSoftwares,
                        },
                        {
                            path: 'website',
                            name: 'the-Website',
                            component: theWebsite,
                        },
                        {
                            path: 'informations',
                            name: 'the-Information',
                            component: theInformations,
                        },
                        {
                            path: 'softwareCoures',
                            name: 'the-SoftwareCoures',
                            component: theSoftwareCoures,
                        }
                    ]
                }

            ]
        }
    ]
})
