<template>
  <div class="page-layout">
    <page-element
      v-for="element in layout.elements"
      :key="element.id"
      :layout="element"
    >
    </page-element>
  </div>
</template>

<script>
// import _ from 'lodash'
import PageElement from './PageElement'

export default {
  name: 'page-layout',
  components: {
    PageElement
  },
  props: {
    layout: Object
  },
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
.page-layout {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}

</style>
