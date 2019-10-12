// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import pageTitle from './components/pageTitle'
import  loading from'../src/layout/loading'
//图片懒加载
import VueLazyload from 'vue-lazyload'
import errorImg from '../src/assets/img/error.png'
import loadingImg from '../src/assets/img/loading.gif'

//加载懒加载插件
Vue.use(VueLazyload,{
  error:errorImg,
  loading:loadingImg
})
Vue.component('loading',loading)
Vue.component('pageTitle',pageTitle)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
