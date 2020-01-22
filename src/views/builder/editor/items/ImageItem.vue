<template>
  <div class="text-item">
  This is a image
  </div>
</template>

<script>
// import _ from 'lodash'
import { ElementService } from '@/services'

export default {
  name: 'image-item',
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
