/**
 * Created by Administrator on 2017/4/14.
 */
import  Vue from 'vue'
import Vuex from  'vuex'
import home from './modules/home'
import film from './modules/film'

Vue.use(Vuex)

const store=new Vuex.Store({
  modules:{

    home,
    film,
    
  }
})

export default store;
