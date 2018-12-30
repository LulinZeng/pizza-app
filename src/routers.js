import Home from "./components/Home"
import Menu from "./components/Menu"
import About from "./components/about/About"
import Admin from "./components/Admin"
import Login from "./components/Login"
import Register from "./components/Register"
//二级路由
import Contact from "./components/about/Contact"
import Delivery from "./components/about/Delivery"
import History from "./components/about/History"
import OrderingGuide from "./components/about/OrderingGuide"

//三级路由
import Phone from "./components/about/contact/Phone"
import PersonName from "./components/about/contact/PersonName"
import { homedir } from "os";



export const routes = [
  {path:'/',name:"homelink",components:{
      default:Home,
      'orderingGuide':OrderingGuide,
      'delivery':Delivery,
      'history':History
  }},
  {path:'/menu',name:"menulink",component:Menu},
  {path:'/about',name:"aboutlink",redirect:'/contact',component:About,children:[
    {path:'/contact',name:"contactlink",redirect:'/personName',component:Contact,children:[
      {path:'/phone',name:"phonelink",component:Phone},
      {path:'/personName',name:"personNamelink",component:PersonName}
    ]},
    {path:'/delivery',name:"deliverylink",component:Delivery},
    {path:'/history',name:"historylink",component:History},
    {path:'/orderingGuide',name:"orderingGuidelink",component:OrderingGuide}
  ]},
  {path:'/admin',name:"adminlink",component:Admin,
  // /*独享守卫 */beforeEnter:((to,form,next) => {
    //alert("非登录状态，不能访问此页面");
    // next('/login');
    // next(false);
    //判断store.getts.isLogin === false
    //if(to.path)
    // if(to.path == "/login" || to.path == "/register"){
    //   next();
    // }else{
    //   alert('还没登录，请先登录！');
    //   next('/login');
    // }

  // })
},
  {path:'/login',name:"loginlink",component:Login},
  {path:'/register',name:"registerlink",component:Register},
  {path:"*",redirect:'/'}
]
