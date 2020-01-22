<template>
  <div class="full-container page-editor"
    @click = "onClick"
  >
    <page-layout
      :layout = "pageLayout"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PageLayout from './editor/PageLayout'

export default {
  name: 'page-editor',
  components: {
    PageLayout
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      pageLayout: 'pagebuilder/pageLayout'
     
    })
  },
  methods: {
    onClick () {
      this.setCurrentElKey({ type: 'page', component: 'page' })
      console.log('this is pageLayout', pageLayout)
    },
    ...mapActions({
      setCurrentElKey: 'pagebuilder/setCurrentElKey'
    })
  }
}
</script>

<style lang="scss" scoped>

.page-editor{
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px;
  background: #f0f8f8;
}

</style>
