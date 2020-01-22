import _ from 'lodash'

class ElementService {
  getStyle (layout) {
    let retStyles
    let background
    let marginTop, marginRight, marginBottom, marginLeft
    let paddingTop, paddingRight, paddingBottom, paddingLeft
    let display, flexDirection, justifyContent, alignItems, flexGrow
    let position, top, right, bottom, left, width, height

    background = _.get(layout, 'property.styling.background.value')
    marginTop = _.get(layout, 'property.styling.spacing.top.margin')
    marginRight = _.get(layout, 'property.styling.spacing.right.margin')
    marginBottom = _.get(layout, 'property.styling.spacing.bottom.margin')
    marginLeft = _.get(layout, 'property.styling.spacing.left.margin')
    paddingTop = _.get(layout, 'property.styling.spacing.top.padding')
    paddingRight = _.get(layout, 'property.styling.spacing.right.padding')
    paddingBottom = _.get(layout, 'property.styling.spacing.bottom.padding')
    paddingLeft = _.get(layout, 'property.styling.spacing.left.padding')

    display = _.get(layout, 'property.styling.display.dispalay')
    flexDirection = _.get(layout, 'property.styling.display.flexDirection')
    justifyContent = _.get(layout, 'property.styling.display.justifyContent')
    alignItems = _.get(layout, 'property.styling.display.alignItems')
    flexGrow = _.get(layout, 'property.styling.display.flexGrow')

    position = _.get(layout, 'property.styling.position.position')
    top = _.get(layout, 'property.styling.position.top')
    right = _.get(layout, 'property.styling.position.right')
    bottom = _.get(layout, 'property.styling.position.bottom')
    left = _.get(layout, 'property.styling.position.left')
    width = _.get(layout, 'property.styling.position.width')
    height = _.get(layout, 'property.styling.position.height')

    retStyles = {
      background,
      display,
      flexDirection,
      justifyContent,
      alignItems,
      flexGrow,
      position,
      top,
      right,
      bottom,
      left,
      width,
      height,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft
    }
    if (layout.component === 'text') {
      let textStyle
      textStyle = this.getTextStyle(layout)
      _.assign(retStyles, textStyle)
      // console.log('retStyles:', textStyle, retStyles)
    }
    return retStyles
  }
  getTextStyle (layout) {
    let color
    let fontSize
    let textAlign
    let lineHeight

    color = _.get(layout, 'property.styling.text.color')
    fontSize = { 'font-size': _.get(layout, 'property.styling.text.fontSize') + 'pt' }
    textAlign = { 'text-align': _.get(layout, 'property.styling.text.alignment') }
    lineHeight = _.get(layout, 'property.styling.text.lineHeight')

    return {
      color, ...fontSize, ...textAlign, lineHeight
    }
  }
}

export default new ElementService()
