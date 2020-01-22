<template>
  <div class="property-elements">
    <b-tabs class="property-tab" content-class="mt-3" fill>
      <b-tab title="General" active>
        <div class="property-element">
          <div class="property-element-title">Set miniumn height (px)</div>
          <number-slider />
        </div>
        <div class="property-element-divider"/>
        <div class="property-element">
          <div class="property-element-title">Set maxiumn height (px)</div>
          <number-slider />
        </div>
        <div class="property-element-divider"/>
        <div class="property-element">
          <div class="property-element-title">Set Gutter width (px)</div>
          <number-slider />
        </div>
        <div class="property-element-divider"/>
        <div class="property-element">
          <div class="property-element-title">Equalize Column Heights?</div>
          <el-switch v-model="equalColumn"></el-switch>
        </div>
      </b-tab>
      <b-tab title="Styling">
        <menu-toggle menuHeader="BACKGROUND">
          <div class="property-element">
            <custom-background />
          </div>
        </menu-toggle>
        <menu-toggle menuHeader="BORDER">
          <div class="property-element">
            <custom-border />
          </div>
        </menu-toggle>
        <menu-toggle menuHeader="SPACING">
          <div class="property-element">
            <custom-space />
          </div>
        </menu-toggle>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { MenuToggle, NumberSlider, CustomBackground, CustomBorder, CustomSpace } from './common'

export default {
  name: 'column-property',
  components: { MenuToggle, NumberSlider, CustomBackground, CustomBorder, CustomSpace },
  props: { },
  data () {
    return {
      textarea: '',
      equalColumn: true
    }
  },
  computed: {
    ...mapGetters({
      currentElKey: 'pagebuilder/currentElKey',
      getConfig: 'pagebuilder/getComponentConfig'
    })
  },
  watch: {
    currentElKey (value) {
      console.log('#PageProperty#currentElKey:', value, this.config)
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
