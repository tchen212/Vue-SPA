// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/views/App'
import i18n from './i18n'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
