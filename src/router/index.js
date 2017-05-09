/**
 * Created by Administrator on 2017/4/11.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const routes=[
  {
    path:"/",
    name:'home',
    component:require('../view/index.vue')
},{
   path:'/film',
   name:'film',
   component:require('../view/film.vue')

},{
  path:'/movieCenter',
  name:'movieCenter',
  component:require("../view/movieCenter.vue")
},{
   path:'/seller',
   name:'seller',
   component:require('../view/seller.vue')
},{
  path:'/my',
  name:'name',
  component:require('../view/my.vue')
},{
  path:'/sellCard',
  name:'sellCard',
  component:require('../view/sellCard.vue')
},
  {
    path:'/cityList',
    name:'cityList',
    component:require('../view/cityList.vue')
  },

]
const router=new VueRouter({
  mode:'history',
  routes:routes,
  history:true,
})
export default router;
