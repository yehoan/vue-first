/**
 * Created by Administrator on 2017/4/11.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index'
import store from '../vuex';
Vue.use(Router);

export const constantRouterMap = [
  {
    path: '/login',
    meta: {title: '登录', noCache: true},
    component: ()=> import('@/view/login'),
  },
  {
    path: '/404',
    component: ()=> import('@/view/features/404'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/view/home'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'index', affix: true, noCache: true }
      }
    ]
  },
  // {
  //   path: '/user',
  //   component: Layout,
  //   hidden: true,
  //   redirect: 'noredict',
  //   children:[
  //     {
  //       path: 'center',
  //       component: ()=> import('@/view/system/user/center'),
  //       name: '个人中心',
  //       meta: {title: '个人中心'}
  //     }
  //   ]
  // }
]
store.dispatch('getRouteValueArr.action').then(res=>{
  console.log(res.data, '能否')
  constantRouterMap.addRoutes(res.data)
  console.log(constantRouterMap, '奥斯卡觉得12')
})


export default new Router({
  mode: 'history',
  routes: constantRouterMap,
})

