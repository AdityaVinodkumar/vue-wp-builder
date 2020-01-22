<template>
  <div v-if="isEnableConfig" class="full-container element-property">
    <div class="property-header">{{config.propertyTitle}}</div>
    <component :is="propertyName" :layout="currentElement"/>
    <!-- <component v-if="currentElKey.type =='section'" :is="config.property.custom[0].component" /> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as properties from './property'
import _ from 'lodash'

export default {
  name: 'element-property',
  components: { ...properties },
  props: { },
  data () {
    return {
      isEnableConfig: false,
      layout: {}
    }
  },
  computed: {
    propertyName () {
      return this.currentElKey.component + '-property'
    },
    ...mapGetters({
      currentElKey: 'pagebuilder/currentElKey',
      currentElement: 'pagebuilder/currentElement',
      getConfig: 'pagebuilder/getComponentConfig'
    })
  },
  watch: {
    currentElKey (value) {
      this.config = this.getConfig(value.component)
      this.isEnableConfig = true
    },
    currentElement (value) {
      console.log('onChangeCurrentElement:', value)
      this.layout = _.cloneDeep(value)
    },
    layout (value) {
    }
  },
  methods: {
    onClickElement: function (type) {
    },
    ...mapActions({
      setCurrentElKey: 'pagebuilder/setCurrentElKey'
    })
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
</style>
