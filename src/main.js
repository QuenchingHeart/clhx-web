import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue'

import './element-variables.scss'

Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
