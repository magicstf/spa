// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引用API文件
import api from './util/api.js'
// 引入jsonp插件
import VueJsonp from 'vue-jsonp'

// import Hello from './components/hello'
// Vue.use(Hello);
// console.log(Hello);

Vue.use(VueJsonp);

// 将API方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
