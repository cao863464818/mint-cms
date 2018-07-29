import Vue from 'vue'
// 1. 引入路由包  
import Router from 'vue-router'

import Home from '@/components/tabbar/Home'
import Member from '@/components/tabbar/Member'
import Cart from '@/components/tabbar/Cart'
import Search from '@/components/tabbar/Search'
//@ ../src   
import NewsList from '@/components/news/NewsList.vue'
import NewsInfo from '@/components/news/NewsInfo.vue'


// 2. 注册路由
Vue.use(Router)

// 3. 把定义好的组件引入   
// import header from '@/components/Header'

// 4. 实例化路由并配置路由规则  
export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/member', component: Member },
    { path: '/cart', component: Cart },
    { path: '/search', component: Search },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo/:id', component: NewsInfo }
  ],
  // linkActiveClass 设置路由的高亮样式
  // mui-active 是 mui提供的一个高亮选中class样式名
  linkActiveClass: 'mui-active'
})
