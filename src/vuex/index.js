/**
 * Created by Administrator on 2017/4/14.
 */
import  Vue from 'vue'
import Vuex from  'vuex'
import home from './modules/home'

Vue.use(Vuex)

const store=new Vuex.Store({
  modules:{
    home,
  }
})

export default store;
