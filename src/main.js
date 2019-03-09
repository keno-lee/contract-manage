import Vue from 'vue';

import Cookies from 'js-cookie';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.scss'; // global css

import App from './App';
import router from './router';
import store from './store';

import i18n from './lang'; // Internationalization
import './icons'; // icon
import './errorLog'; // error log
import './permission'; // permission control
import './mock'; // simulation data

import * as filters from './filters'; // global filters
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset-UTF-8';
// axios.defaults.headers.withCredentials = true;
axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'http://47.99.242.31:8080'
axios.defaults.baseURL = 'http://roshan.frpgz1.idcfengye.com/'
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    Element.MessageBox.alert('网络异常', {
      confirmButtonText: '确定'
    });
    return Promise.reject(error);
  }
);
Vue.prototype.$ajax = axios;

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
});

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
});
