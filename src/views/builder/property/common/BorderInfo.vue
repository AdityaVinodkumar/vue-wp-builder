<template>
  <div class="border-info">
    <div class="property-elements">
      <div class="property-element">
        <color-picker />
      </div>
      <div class="property-element">
        <div class="property-element-title">Border Type</div>
        <el-select v-model="borderType" class="w-100p">
          <el-option label="Dotted" value="dotted"></el-option>
          <el-option label="Dashed" value="dashed"></el-option>
          <el-option label="Solid" value="solid"></el-option>
          <el-option label="DOuble" value="double"></el-option>
          <el-option label="Ridge" value="ridge"></el-option>
          <el-option label="Inset" value="inset"></el-option>
          <el-option label="Outset" value="outset"></el-option>
          <el-option label="None" value="none"></el-option>
          <el-option label="Hidden" value="hidden"></el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
// import _ from 'lodash'
import { ElementService } from '@/services'
import ColorPicker from './ColorPicker'

export default {
  name: 'border-info',
  components: { ColorPicker },
  props: {
    layout: Object
  },
  data () {
    return {
      borderType: ''
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
.border-info {
  display: flex;
  justify-content:flex-start;
}
.property-element {
  padding: 0px;
}
</style>
