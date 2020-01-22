<template>
  <div class="full-container page-builder">
    <div id="component-list">
      <component-list />
    </div>
    <div id="page-editor">
      <page-editor />
    </div>
    <div id="element-property">
      <element-property />
    </div>
  </div>
</template>

<script>
import ComponentList from './builder/ComponentList'
import ElementProperty from './builder/ElementProperty'
import PageEditor from './builder/PageEditor'

export default {
  name: 'page-builder',
  components: {
    ComponentList,
    PageEditor,
    ElementProperty
  },
  computed: {
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.page-builder{
  width: 100%;
  display: flex;
  flex-direction: row;
}
#component-list {
  width: 250px;
  height: 100%;
}
#page-editor {
  width: 350px;
  height: 100%;
  display: flex;
  flex: 1;
  overflow: auto;
  padding: 0px;
}
#element-property {
  width: 250px;
  height: auto;
  overflow: auto;
  padding: 0px;
  background-color: #1f232a;
}

</style>
