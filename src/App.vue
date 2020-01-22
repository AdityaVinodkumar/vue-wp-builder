<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  mixins: [ ],
  mounted: function () {
    this.loadComponentList()
    this.loadLayout()
    this.setCurrentElKey({ type: 'page', component: 'page' })
    console.log('-app@mounted:', this.componentList, this.getElement())
  },
  computed: {
    ...mapGetters({
      componentList: 'pagebuilder/componentList',
      getElement: 'pagebuilder/getElement'
    })
  },
  methods: {
    ...mapActions({
      loadComponentList: 'pagebuilder/loadComponentList',
      loadLayout: 'pagebuilder/loadLayout',
      setCurrentElKey: 'pagebuilder/setCurrentElKey'
    })
  }
}
</script>

<style lang="scss">
@import './app.scss'
</style>
