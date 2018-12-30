import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from "./routers";


Vue.use(VueRouter)


const router = new VueRouter({
  routes,
  mode:"history" ,
  // 路由滚动事件
  scrollBehavior(to,form,savedPosition){
    // return {x:0,y:100}
    // return {selector:'.btn'}
    if(savedPosition){
      return savedPosition
    }else{
      return{x:0,y:0}
    }
  } 
})

//全局守卫
// router.beforeEach((to,from,next) =>{
//   // alert('还没登录，请先登录！');
//   // next();

//   //console.log(to.path);

//   //判断store.getts.isLogin === false
//   //if(to.path)
//   if(to.path == "/login" || to.path == "/register"){
//     next();
//   }else{
//     alert('还没登录，请先登录！');
//     next('/login');
//   }
// })

//后置钩子
// router.afterEach((to,from) =>{
//   alert("after each");
// })



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
