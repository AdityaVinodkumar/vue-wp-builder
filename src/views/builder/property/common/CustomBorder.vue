<template>
  <div class="custom-border">
    <el-tabs type="border-card">
      <el-tab-pane label="TOP"><border-info/></el-tab-pane>
      <el-tab-pane label="RIGHT"><border-info/></el-tab-pane>
      <el-tab-pane label="BOTTOM"><border-info/></el-tab-pane>
      <el-tab-pane label="LEFT"><border-info/></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import _ from 'lodash'
import { ElementService } from '@/services'
import BorderInfo from './BorderInfo'

export default {
  name: 'custom-border',
  components: { BorderInfo },
  props: {
    layout: Object
  },
  data () {
    return {
      value: 0
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
.custom-border {
  display: flex;
  justify-content:flex-start;
}
</style>
