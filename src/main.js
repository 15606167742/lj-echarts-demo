import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import common from '@/utils/common.js'

Vue.config.productionTip = false

Vue.prototype.$echarts = require('echarts');
Vue.prototype.$moment = require('moment')

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
