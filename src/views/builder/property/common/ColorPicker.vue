<template>
    <div class="color-picker">
      <el-color-picker class="my-color-picker" :value="getValue" min="0" :max="50" color-format="rgb" @change = "onChangeValue"></el-color-picker>
      <el-input placeholder="Please input" :value="getValue"></el-input>
    </div>
</template>
<script>
import { LayoutService } from '@/services'
export default {
  name: 'color-picker',
  data () {
    return {
    }
  },
  computed: {
    getValue () {
      return LayoutService.getElementProperty(this.layout, this.property)
    }
  },
  methods: {
    onChangeValue: function (value) {
      LayoutService.setElementProperty(this.layout, this.property, value)
    }
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
.color-picker {
  display: flex;
  width:100%;
  margin: 10px 0px;
}
.my-color-picker{
  margin-right: 10px;
}
::v-deep .el-color-picker__trigger {
    border: none;
    padding: 0;
    border-radius: 30px;
}
::v-deep .el-color-picker__color {
    border-radius: 30px;
}
::v-deep .el-color-picker__color-inner {
    border-radius: 30px;
}
::v-deep .el-color-picker__icon{
  font-size: 0;
}

</style>
