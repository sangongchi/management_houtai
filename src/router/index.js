import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import NotFound from '../components/404.vue';

import Padge11 from '../components/aside/nav1/page1-1.vue'
import Padge12 from '../components/aside/nav1/page1-2.vue'
import Padge21 from "../components/aside/nav2/page2-1.vue"
import Padge22 from "../components/aside/nav2/page2-2.vue"
import Padge31 from '../components/aside/nav3/padg3-1.vue'
import Login from "../components/user/login.vue"
import Register from "../components/user/register.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {path:"/1-1",name:"Page11",component:Padge11},
        // {path:"/user/1-2",name:"Page12",component:Padge12},
         {path:"/page12",name:"Page12",component:Padge12},
        {path:"/2",name:"Page21",component:Padge21},
        {path:"/3",name:"Page22",component:Padge22},
        {path:"/4",name:"Page31",component:Padge31},
      ]
    },
    {
      path:"/404",
      component:NotFound,
      name:'',
      hidden:true
    },
    {
      path:"/login",
      name:"login",
      component:Login
    },
     {
       path: "/regiter",
       name: "register",
       component: Register
     },
    {
      path:"*",
      hidden:true,
      redirect:{
        path:'/404'
      }
    }
  ]
})
