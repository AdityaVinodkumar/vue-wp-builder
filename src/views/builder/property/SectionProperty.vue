<template>
  <div class="property-elements">
    <b-tabs class="property-tab" content-class="mt-3" fill>
      <b-tab title="General" active>
        <menu-toggle menuHeader="SECTION STRUCTURE">
          <section-structure :layout="layout"/>
        </menu-toggle>
        <div class="property-element">
          <div class="property-element-title">Interior Width</div>
          <el-radio-group v-model="check">
          <el-radio-button :label="500">Site Width</el-radio-button>
          <el-radio-button :label="700">100% Width</el-radio-button>
          </el-radio-group>
        </div>
        <div class="property-element-divider"/>
        <div class="property-element">
          <div class="property-element-title">Menu Anchor ID</div>
            <b-form-input class="property-element-input" placeholder=""></b-form-input>
        </div>
        <div class="property-element-divider"/>
        <div class="property-element">
          <div class="property-element-title">Set miniumn height(px)</div>
          <number-slider />
        </div>
        <div class="property-element">
          <div class="property-element-title">Select Section Seperator</div>
          <el-select v-model="seperatorType" class="w-100p">
            <el-option label="Inset" value="inset"></el-option>
            <el-option label="Outset" value="outset"></el-option>
            <el-option label="None" value="none"></el-option>
            <el-option label="Hidden" value="hidden"></el-option>
          </el-select>
        </div>
        <div class="property-element">
          <div class="property-element-title">Seperator Position</div>
          <el-radio-group v-model="check">
          <el-radio-button :label="500">Top</el-radio-button>
          <el-radio-button :label="700">Bottom</el-radio-button>
          </el-radio-group>
        </div>
        <div class="property-element">
          <div class="property-element-title">Seperator height(px)</div>
          <number-slider />
        </div>
        <div class="property-element">
          <div class="property-element-title">Seperator Color</div>
          <color-picker />
        </div>
      </b-tab>
      <b-tab title="Styling">
        <menu-toggle menuHeader="BACKGROUND">
          <div class="property-element">
            <custom-background />
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
import { MenuToggle, SectionStructure, NumberSlider, ColorPicker, CustomBackground, CustomSpace } from './common'
export default {
  name: 'section-property',
  components: { MenuToggle, SectionStructure, NumberSlider, ColorPicker, CustomBackground, CustomSpace },
  props: {
    layout: Object
  },
  data () {
    return {
      check: 1,
      seperatorType: 1
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
