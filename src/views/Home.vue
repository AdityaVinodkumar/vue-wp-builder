<template>
  <div id="home" class="layout-container">
    <div id="app-header">
      <app-header />
    </div>
    <div id="page-builder">
      <page-builder />
    </div>
    <div id="app-footer">
      <app-footer />
    </div>
  </div>
</template>

<script>
import AppHeader from './AppHeader'
import PageBuilder from './PageBuilder'
import AppFooter from './AppFooter'

export default {
  name: 'home',
  components: {
    AppHeader,
    PageBuilder,
    AppFooter
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    console.log('home@mounted:')
  }
}
</script>

<style lang="scss">
#home {
  width: 100%;
  height: 100%;
}
#app-header {
  width: 100%;
  height: 44px;
}
#page-builder {
  height: calc(100vh - 44px - 44px);
  width: 100%;
}
#app-footer {
  width: 100%;
  height: 44px;
}
</style>
