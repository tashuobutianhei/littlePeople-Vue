// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible'
import router from './router'
import vuex from 'vuex'

router.beforeEach((to,from,next)=>{
  window.document.title = to.meta.title;
  next()
})


Vue.use(vuex);
Vue.use(ElementUI);
Vue.config.productionTip = false
/* eslint-disable no-new */
const store = new vuex.Store({
  state:{
    logvisible:false,
    regvisible:false,
    flag:'index',
    StoreId:'', //当前加载的外卖店铺id
    Apiece:'',
    Log:'', //登录信息
  },
  mutations:{
    changelog(state){
      state.logvisible = !state.logvisible;
    },
    changereg(state){
      state.regvisible = !state.regvisible;
    },
    changeStoreId(state,id){
      state.StoreId = id;
    },
    changeApiece(state,id){
      state.Apiece = id;
    },
    Log(state,log){
      state.Log = log;
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
