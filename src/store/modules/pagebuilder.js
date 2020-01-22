    import * as types from '../mutation-types'
// import moment from 'moment'
import _ from 'lodash'

import { ComponentService, LayoutService } from '@/services'

export default {
  namespaced: true,
  state: {
    componentList: {},
    layout: {},
    currElement: {},
    currentElKey: {},
    draggingElKey: {}
  },
  mutations: {
    [types.SET_COMPONENTLIST] (state, value) {
      console.log('@SET_COMPONENTLIST@', value.componentList)
      state.componentList = _.cloneDeep(value.componentList)
    },
    [types.SET_LAYOUT] (state, value) {
      state.layout = _.cloneDeep(value.layout)
    },
    [types.SET_CURRENTELKEY] (state, value) {
      console.log('@SET_CURRENTELKEY@', value.key)
      state.currElement = LayoutService.getElement(state.layout, value.key)
      state.currentElKey = _.cloneDeep(value.key)
    },
    [types.SET_DRAGGINGELKEY] (state, value) {
      console.log('@SET_DRAGGINGELKEY@', value.key)
      state.draggingElKey = _.cloneDeep(value.key)
    }
  },
  actions: {
    loadComponentList: async ({ commit }) => {
      let componentList = ComponentService.getComponentList()
      commit({
        type: types.SET_COMPONENTLIST,
        componentList: componentList
      })
    },
    loadLayout: async ({ commit }) => {
      let pageLayout = LayoutService.fetchLayout()
      commit({
        type: types.SET_LAYOUT,
        layout: pageLayout
      })
    },
    setCurrentElement: async ({ commit }, element) => {
      this.setCurrentElKey({ type: element.type, component: element.component, id: element.id })
    },
    setCurrentElKey: async ({ commit }, key) => {
      commit({
        type: types.SET_CURRENTELKEY,
        key
      })
    },
    setDraggingElKey: async ({ commit }, key) => {
      commit({
        type: types.SET_DRAGGINGELKEY,
        key
      })
    }
  },
  getters: {
    getComponentConfig: (state) => (component) => {
      return ComponentService.getConfig(component)
    },
    getElement: (state) => (key) => {
      return LayoutService.getElement(state.layout, key)
    },
    componentList: state => state.componentList,
    pageLayout: state => state.layout,
    currentElement: state => state.currElement,
    currentElKey: state => state.currentElKey,
    draggingElKey: state => state.draggingElKey
  }
}
