import Vue from 'vue'
import Vuex from 'vuex'

import PageBuilderModule from './modules/pagebuilder'

Vue.use(Vuex)
export const strict = false

export default new Vuex.Store({
  modules: {
    pagebuilder: PageBuilderModule
  },
  strict: false
})
