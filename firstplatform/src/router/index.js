import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login/login'
import Register from '@/page/login/register'
import Changepassword from '@/page/login/changepassword'
import PageOne from '@/page/one/home/pageone'
import PageTwo from '@/page/one/home/pagetwo'
import PageThree from '@/page/one/home/pagethree'
import PageFour from '@/page/one/home/pagefour'
import PageFive from '@/page/one/home/pagefive'
import PageSix from '@/page/one/home/pagesix'
import PageSeven from '@/page/one/home/pageseven'
import PageEight from '@/page/one/home/pageeight'
import Details from '@/page/one/details/sceniclist'
import ScenicData from '@/page/one/details/scenicdata'
import ScenicStrategy from '@/page/one/details/scenicstrategy'
import ScenicDataManage from "@/page/one/details/scenicdatamanage"
import AuditData from "@/page/one/details/auditdata"

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path:'/register',
      name:'Register',
      component:Register,
    },{
      path:"/changepassword",
      name:"Changepassword",
      component:Changepassword,
    },
    // 一级平台路由链接
    {
      path:'/firsthomeone',
      name:'PageOne',
      component:PageOne,
    },
    {
      path:"/firsthometwo",
      name:'PageTwo',
      component:PageTwo,
    },
    {
      path:"/firsthomethree",
      name:'PageThree',
      component:PageThree,
    },
    {
      path:"/firsthomefour",
      name:'PageFour',
      component:PageFour,
    },
    {
      path:"/firsthomefive",
      name:'PageFive',
      component:PageFive,
    },
    {
      path:"/firsthomesix",
      name:'PageSix',
      component:PageSix,
    },
    {
      path:"/firsthomeseven",
      name:'PageSeven',
      component:PageSeven,
    },
    {
      path:"/firsthomeeight",
      name:'PageEight',
      component:PageEight,
    },
    {
      path:"/sceniclistdetails",
      name:Details,
      component:Details,
    },
    {
      path:"/scenicdata",
      name:'ScenicData',
      component:ScenicData,
    },
    {
      path:"/scenicstrategy",
      name:"ScenicStrategy",
      component:ScenicStrategy,
    },
    {
      path:"/scenicdatamanage",
      name:"ScenicDataManage",
      component:ScenicDataManage,
    },
    {
      path:"/auditdata",
      name:"AuditData",
      component:AuditData,
    }
  ]
})
