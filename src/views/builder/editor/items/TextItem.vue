<template>
  <div class="text-item">
  {{layout.property.general.text}}
  </div>
</template>

<script>
// import _ from 'lodash'
import { ElementService } from '@/services'

export default {
  name: 'text-item',
  components: {
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
    applyStyles () {
      return ElementService.getStyle(this.layout)
    }
  }
}
</script>

<style scoped>
.text-item {
}

</style>
