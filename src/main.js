import Vue from 'vue'
import VueSVGIcon from 'vue-svgicon'
import BootstrapVue from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store/'
import Argon from './plugins/argon-kit'

import localforage from 'localforage'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.config.productionTip = false

localforage.config({ name: 'wpBuilder' })
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(ElementUI, { locale })
Vue.use(Argon)
Vue.use(VueSVGIcon)
Vue.use(BootstrapVue)

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vm
