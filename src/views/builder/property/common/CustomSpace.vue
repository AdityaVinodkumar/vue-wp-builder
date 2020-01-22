<template>
  <div class="custom-space">
    <div class="property-element-title">Padding</div>
    <el-tabs type="border-card">
      <el-tab-pane label="TOP">
        <div class="property-element">
          <number-slider />
        </div>
      </el-tab-pane>
      <el-tab-pane label="RIGHT">
        <div class="property-element">
          <number-slider />
        </div>
      </el-tab-pane>
      <el-tab-pane label="BOTTOM">
        <div class="property-element">
          <number-slider />
        </div>
      </el-tab-pane>
      <el-tab-pane label="LEFT">
        <div class="property-element">
          <number-slider />
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="property-element-title">Margin</div>
    <el-tabs type="border-card">
      <el-tab-pane label="TOP">
        <div class="property-element">
          <number-slider />
        </div>
      </el-tab-pane>
      <el-tab-pane label="RIGHT">
        <div class="property-element">
          <number-slider />
        </div>
      </el-tab-pane>
      <el-tab-pane label="BOTTOM">
        <div class="property-element">
          <number-slider />
        </div>
      </el-tab-pane>
      <el-tab-pane label="LEFT">
        <div class="property-element">
          <number-slider />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import _ from 'lodash'
import { ElementService } from '@/services'
import NumberSlider from './NumberSlider'
export default {
  name: 'custom-space',
  components: { NumberSlider },
  props: {
    layout: Object
  },
  data () {
    return {
      value: 0
    }
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
.custom-border {
  display: flex;
  justify-content:flex-start;
}
</style>
