<template>
  <div class="custom-background">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 10px;">
      <el-radio-button :label="true"><i class="fa fa-paint-brush" color="#ffffff"></i></el-radio-button>
      <el-radio-button :label="false"><i class="fa fa-image" color="#ffffff"></i></el-radio-button>
    </el-radio-group>
    <div v-if="isCollapse">
      <color-picker/>
    </div>
    <div v-else>
      <image-picker :select-item="false"/>
    </div>
  </div>
</template>

<script>
import ColorPicker from './ColorPicker'
import ImagePicker from './ImagePicker'
export default {
  name: 'custom-background',
  components: { ColorPicker, ImagePicker },
  data () {
    return {
      isCollapse: true,
      fileName: ''
    }
  },
  methods: {
    fileChange (file) {
      console.log('this is file', file)
      this.fileName = file.name
    },
    fileRemove (file) {
      console.log('this is file', file)
      this.fileName = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-background {
  height: 150px;
}
.choose-file{
  display: flex;
}
.remove-button{
  margin-top:10px;
}
::v-deep .el-radio-group .el-radio-button {
  width: 50px;

}
::v-deep .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: #409EFF;
    background-color: #c2c2c2;
    border-color:  #c2c2c2;
    border-right-color:#000000;
}
::v-deep .el-radio-group{
    width: 100%;
    background-color: #c2c2c2;
    label {
      margin-bottom: 0;
    }
}
::v-deep .el-radio-button__inner {
    background:#c2c2c2;
    border-color: #c2c2c2;
    border-right-color:#000000;
    font-size: 20px;
    padding: 10px 18px;
}
::v-deep .el-radio-button:last-child .el-radio-button__inner {
  border-radius: 0;
}
::v-deep .el-input__inner {
  padding: 5px;
}
</style>
