import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; //需要注意的是，样式文件需要单独引入
import App from './App.vue';
import router from './router';
import store from './store';
import api from './js/request/request';
import i18n from './js/i18n';
import './assets/common/variable.less';


Vue.use(ElementUI);
Vue.config.productionTip = false
// api挂载
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')