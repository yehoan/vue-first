// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './vuex/index'

import router from './router/index'

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false

 //自定义了一个scroll指令
Vue.directive('scroll',{
  bind:function (el,binding) {
    window.addEventListener('scroll',()=>{
      let fnc=binding.value;
      fnc(el);
    })
  }
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

