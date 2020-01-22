<template>
  <div class="text-align">
    <!-- <el-radio-button :label="true"><i class="fa fa-left" color="#ffffff"></i></el-radio-button>
    <i class="fa fa-center" color="#ffffff"></i>
    <i class="fa fa-right" color="#ffffff"></i> -->
  </div>
</template>

<script>
// import _ from 'lodash'
import { ElementService } from '@/services'

export default {
  name: 'text-align',
  components: { },
  props: {
    number: Object
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
.text-align {
  display: flex;
  justify-content:flex-start;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  background-color: #3c434e;
}
</style>
