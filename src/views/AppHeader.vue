<template>
  <div class="full-container app-header">
    <div class="back">
      <img src="img/headerbar/back-arrow.png" alt="image" class="back-arrow">
      <span class="back-label">BACK TO ADMIN</span>
    </div>
    <div class="device">
      <img src="img/headerbar/device-desktop.png" alt="image" class="device-item">
      <img src="img/headerbar/device-tablet.png" alt="image" class="device-item">
      <img src="img/headerbar/device-mobile.png" alt="image" class="device-item">
    </div>
    <div class="language flex-center">PAGE LANGUAGE</div>
    <div class="properties flex-center">PAGE PROPERTIES</div>
    <div class="preview flex-center">PREVIEW</div>
    <div class="save flex-center">SAVE</div>
  </div>
</template>

<script lang="js">
export default {
  name: 'app-header',
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #303030;
  color: white;
  border-bottom-color: #558cde;
  border-bottom-width: 3px;
  border-bottom-style: solid;
}
.back {
  width: 162px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(54, 60, 68);
  cursor: pointer;

  .back-arrow{
    padding-left: 5px;
    padding-right: 5px;
  }
  .back-label{
    &:hover {
      color: rgba(200,200,200);
    }
  }
  &:hover {
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.12);
  }
}
.device {
  width: 162px;
  margin-left: auto;

  .device-item{
    cursor: pointer;
    padding: 5px;
    &:hover {
      color: rgba(200,200,200);
    }
  }
}
.language {
  width: 180px;
  height: 100%;

  background-color: rgba(114, 123, 124);
  border-width: 1px;
  border-color:black;
  cursor: pointer;
  &:hover {
      color: rgba(200,200,200);
  }
}
.properties {
  width: 150px;
  height: 100%;

  background-color: #51627a;
  border-width: 1px;
  border-color:black;
  cursor: pointer;
  &:hover {
      color: rgba(200,200,200);
  }
}
.preview {
  width: 100px;
  height: 100%;

  background-color: #363c44;
  border-width: 1px;
  border-color:black;
  cursor: pointer;
  &:hover {
      color: rgba(200,200,200);
  }
}
.save {
  width: 100px;
  height: 100%;

  background-color: #3e7bd7;
  border-width: 1px;
  border-color:black;
  cursor: pointer;
  &:hover {
      color: rgba(200,200,200);
  }
}

</style>
