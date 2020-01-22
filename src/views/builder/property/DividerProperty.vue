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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'divider-property',
  props: { },
  data () {
    return {
      textarea: ''
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
