import LayoutSchema from '@/assets/datas/layout-schema.json'
import _ from 'lodash'

class LayoutService {
  fetchLayout () {
    return LayoutSchema
  }
  getElement (layout, key) {
    var searchElement
    console.log('this is layout', layout, 'this is key', key)
    function _searchElement (layout, key) {
      if (!layout) return null
      if (layout.type === key.type && layout.component === key.component && layout.id === key.id) {
        searchElement = layout
        return layout
      }
      if (!layout.elements) return null
      layout.elements.forEach(el => {
        return _searchElement(el, key)
      })
      return null
    }
    if (key === undefined) return layout
    if (key.type === 'page') return layout
    _searchElement(layout, key)
    return searchElement
  }
  getElementProperty (layout, property) {
    let value = _.get(layout, property)
    console.log('getElementProperty:', 'layout=', layout, 'property=', property, 'value=', value)
    return value
  }
  setElementProperty (layout, property, value) {
    _.set(layout, property, value)
  }
  processDnd (dstLayout, draggingElKey) {
    
  }
  setSectionColumns (layout, type) {
  }
}

export default new LayoutService()
