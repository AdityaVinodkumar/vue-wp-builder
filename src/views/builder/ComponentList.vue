<template>
  <div class="full-container component-list">
    <div class="main-title">COMPONENTS</div>
    <div class="sub-title">GENERAL COMPONENTS</div>
      <div class="element-list">
        <div v-for="element in componentList.general"
          :key="element.name"
          draggable="true"
          @dragstart="e => onDragStartElement(e, element)"
          @click="onClickElement(element)"
        >
          <img v-if="element.component !== 'column'" class="element" :src="'img/component/'+element.component+'.png'"/>
      </div>
    </div>
    <div class="sub-title">AVRAMED COMPONENTS</div>
    <div class="element-list">
        <div v-for="element in componentList.avramed"
          :key="element.name"
          draggable="true"
          @dragstart="e => onDragStartElement(e, element)"
          @click="onClickElement(element)"
        >
          <img class="element" :src="'img/component/'+element.component+'.png'"/>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'component-list',
  components: { },
  data () {
    return { }
  },
  computed: {
    ...mapGetters({
      componentList: 'pagebuilder/componentList'
    })
  },
  methods: {
    onClickElement (element) {
      // this.setCurrentElKey({ type: element.type, component: element.component })
    },
    onDragStartElement (e, item) {
      e.dataTransfer.dropEffect = 'copy'
      e.dataTransfer.effectAllowed = 'all'
      let draggingElKey = { 'type': item.type, 'component': item.component, 'id': '0', 'mode': 'add' }
      e.dataTransfer.setData('object', draggingElKey)

      this.setDraggingElKey(draggingElKey)
      console.log('@elementBar@onDragStart', e)
    },
    ...mapActions({
      setCurrentElKey: 'pagebuilder/setCurrentElKey',
      setDraggingElKey: 'pagebuilder/setDraggingElKey'
    })
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.component-list {
  background-color: #1f232a;
  color: white;
}
.main-title {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-bottom-color: #555555;
  border-bottom-width: 3px;
  border-bottom-style: solid;
}
.sub-title {
  margin-top: 20px;
  padding: 5px;
  width: 100%;
  text-align: left;
  font-size: 14px;
  color: #adafb1;
}
.element-list {
  height: auto;
  margin-left: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
.element {
  width: 75px;
  height: 55px;
  margin: 5px 10px 5px 10px !important;
  border-radius: 3px !important;
  border-width: 1px;
  border-color: #555555;
  border-style: solid;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.25);
  }
  &:active {
    box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0.25);
  }

  user-select: none;
}
.element-dragging {
  background-color: #6699cc;
  color: white;
}
</style>
