<template>
<div class="page-element"
  :element-type="layout.type"
  :style="applyStyles()"
  :class="elementBorderColor"
  @mouseleave.stop="isMouseEnter = false" @mouseenter.stop="isMouseEnter = true"
  @click.stop="onClick"
  @dragstart="onDragStartElement"
  @dragover="onDragOverElement"
  @drop.stop="onDropElement"
  draggable = "true"
>
  <div v-if="isMouseEnter" class="element-header">
    <div class="header-actions" :class="elementBackground">
      <div class="action-icon" @click.stop="onClickMove">
        <i class="fa fa-arrows-alt" color="#ffffff"></i>
      </div>
      <div class="action-icon" @click.stop="onClickSetting">
        <i class="fa fa-cog" color="#ffffff"></i>
      </div>
      <div class="action-icon" @click.stop="onClickDelete">
        <i class="fa fa-trash" color="#ffffff"></i>
      </div>
    </div>
    <span style="color:black; margin-left:5px; font-size:12px">{{layout.type}}</span>
  </div>
  <component v-if="layout.type=='item'" :is="compoentName" :layout="layout"/>
  <page-element v-for="element in layout.elements" :key="element.id" :layout="element">
  </page-element>
</div>
</template>

<script>
// import _ from 'lodash'
import * as items from './items'
import { ElementService } from '@/services'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'page-element',
  components: { ...items },
  props: {
    layout: Object
  },
  data () {
    return {
      isMouseEnter: false,
      textItem: 'text-item'
    }
  },
  computed: {
    compoentName () {
      return this.layout.component + '-item'
    },
    elementBorderColor () {
      return {
        'bordercolor-blue': this.layout.type === 'section' && this.isMouseEnter,
        'bordercolor-green': this.layout.type === 'column' && this.isMouseEnter,
        'bordercolor-black': this.layout.type === 'item' && this.isMouseEnter
      }
    },
    elementBackground () {
      return {
        'background-blue': this.layout.type === 'section',
        'background-green': this.layout.type === 'column',
        'background-black': this.layout.type === 'item'
      }
    },
    ...mapGetters({
      draggingElKey: 'pagebuilder/draggingElKey'
    })
  },
  watch: {},
  methods: {
    onClick (e) {
      console.log('#PageElement#onClick', this.layout)
      this.setCurrentElKey({ id: this.layout.id, type: this.layout.type, component: this.layout.component })
    },
    onClickMove (e) {
      console.log('#PageElement#onClickMove', this.layout)
    },
    onClickSetting (e) {
      console.log('#PageElement#onClickSetting', this.layout)
    },
    onClickDelete (e) {
      console.log('#PageElement#onClickDelete', this.layout)
    },
    onDragStartElement (e) {
      // console.log('PageElement@onDragStart:', e)
    },
    onDropElement (e) {
      // var data = e.dataTransfer.getData('object')
      var elKey = this.draggingElKey
      console.log('PageElement@onDrop:', elKey)
    },
    onDragOverElement (e) {
      // var data = e.dataTransfer.getData('object')
      // var elKey = this.draggingElKey
      // console.log('PageElement@onDragOverElement:', e, elKey)
      if (this.layout.type === 'column') {
        e.preventDefault()
      }
    },
    applyStyles () {
      return ElementService.getStyle(this.layout)
    },
    ...mapActions({
      setCurrentElKey: 'pagebuilder/setCurrentElKey',
      setDraggingElKey: 'pagebuilder/setDraggingElKey'
    })
  },
  mounted () {}
}
</script>

<style scoped>
.page-element {
  position: relative;
  display: flex;
  flex-direction: column;
  border-width: 0px;
  border-style: solid;
  user-select: none;
}
.element-header {
  height: 20px;
  width: 100%;
  display: flex;
  background: transparent;
  position: absolute;
  top: -1px;
  left: -1px;
}
.element-content {

}
.header-actions {
  display: flex;

  height: 100%;
  width: 55px;
  color: white;
}
.bordercolor-blue {
  border-width: 2px;
  border-color: blue;
}
.bordercolor-green {
  border-width: 2px;
  border-color: green;
}
.bordercolor-black {
  border-width: 2px;
  border-color: black;
}
.background-blue {
  background: blue;
}
.background-green {
   background: green;
}
.background-black {
   background: black;
}
.action-icon {
  margin-left: 5px;
  font-size: 14px;
  text-align: left;
}
</style>
