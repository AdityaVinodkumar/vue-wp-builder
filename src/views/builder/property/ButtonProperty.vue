<template>
  <div class="property-elements">
    <b-tabs class="property-tab" content-class="mt-3" fill>
      <b-tab title="General" active>
        <div class="property-element">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="Please input"
            v-model="layout.property.general.text">
          </el-input>
        </div>
      </b-tab>
      <b-tab title="Styling">
        <menu-toggle menuHeader="TEXT">
          <div class="property-element">
            <div class="property-element-title">Text Color</div>
            <color-picker />
          </div>
          <div class="property-element">
            <div class="property-element-title">Font Size(px)</div>
            <number-slider />
          </div>
          <div class="property-element">
            <div class="property-element-title">Alignment</div>
            <text-align />
          </div>
          <div class="property-element">
            <div class="property-element-title">Line Size(px)</div>
            <number-slider />
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
import { MenuToggle, ColorPicker, NumberSlider, TextAlign, CustomSpace } from './common'
export default {
  name: 'button-property',
  components: { MenuToggle, ColorPicker, NumberSlider, TextAlign, CustomSpace },
  props: {
    layout: Object
  },
  data () {
    return {
      textarea: ''
    }
  },
  computed: {
    ...mapGetters({
      currentElKey: 'pagebuilder/currentElKey',
      currentElement: 'pagebuilder/currentElement',
      getConfig: 'pagebuilder/getComponentConfig' })
  },
  watch: {
    currentElKey (value) {
      console.log('currentElKey:', value, this.config)
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
