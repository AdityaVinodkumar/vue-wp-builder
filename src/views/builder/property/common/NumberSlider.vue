<template>
  <div class="number-slider">
    <el-slider v-model="value" :min="0" :max="100" @change = "onChangeValue"></el-slider>
    <el-input-number :value="getValue" :min="0" :max="100" controls-position="right" @change = "onChangeValue"></el-input-number>
  </div>
</template>

<script>
import _ from 'lodash'
import { LayoutService } from '@/services'
export default {
  name: 'number-slider',
  components: {
  },
  props: {
    layout: Object,
    property: String
  },
  data () {
    return {
      value: 0
    }
  },
  computed: {
    getValue () {
      let fontSize
      fontSize = LayoutService.getElementProperty(this.layout, this.property)
      fontSize = _.parseInt(fontSize)
      return fontSize
    }
  },
  methods: {
    onChangeValue: function (value) {
      console.log('onChangeValue:', value)
      value = value.toString()
      LayoutService.setElementProperty(this.layout, this.property, value)
    }
  },
  mounted () {
    this.value = this.getValue
  }
}
</script>

<style scoped>
.number-slider {
  display: flex;
  justify-content:flex-start;
}
</style>
