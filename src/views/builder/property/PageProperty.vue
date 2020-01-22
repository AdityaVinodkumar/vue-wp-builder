<template>
  <div class="property-elements">
    <div class="property-element">
      <div class="property-element-title">Page title</div>
        <b-form-input class="property-element-input" placeholder=""></b-form-input>
    </div>
    <div class="property-element">
      <div class="property-element-title">Page meta title</div>
        <b-form-input class="property-element-input" placeholder=""></b-form-input>
    </div>
    <div class="property-element">
      <div class="property-element-title">Page meta description</div>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="Please input"
        v-model="textarea">
      </el-input>
    </div>
    <div class="property-element">
      <div class="property-element-title">Page Background</div>
      <custom-background />
    </div>
    <div class="property-element">
      <div class="property-element-title">Hide Navigation?</div>
      <el-switch v-model="hideNavigation"></el-switch>
    </div>
    <div class="property-element">
      <div class="property-element-title">Hide Footer?</div>
      <el-switch v-model="hideNavigation"></el-switch>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { CustomBackground } from './common'

export default {
  name: 'page-property',
  components: { CustomBackground },
  props: { },
  data () {
    return {
      textarea: '',
      hideNavigation: true
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
