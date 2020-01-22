<template>
    <div>
        <div class="choose-file">
            <el-input v-model="fileName" placeholder="Choose file"></el-input>
            <el-upload
                class="upload-demo"
                action="#"
                :on-change="fileChange"
                :on-remove="fileRemove"
            
            >
                <el-button>Browse</el-button>
            </el-upload>
        </div>
        <div v-if="selectItem" class="remove-button">
            <el-button v-on:click="fileRemove" type="danger">REMOVE IMAGE</el-button>
        </div>
        <div v-else>
            <img src="fileUrl"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'image-picker',
  data () {
    return {
      isCollapse: true,
      fileName: '',
      fileUrl:'',
    }
  },
   props :['selectItem'],
  methods: {
    fileChange (file) {
        this.fileName = file.name
        this.fileUrl = file.url
        console.log('this is file', file, this.fileUrl)
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
