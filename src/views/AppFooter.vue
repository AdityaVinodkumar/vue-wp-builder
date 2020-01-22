<template>
  <div class="full-container app-footer">
    <div class="comment">
      © 2019 All rights reserved. Crafted with     by Avrasys
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'app-footer',
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.app-footer {
  display: flex;
  justify-content: flex-start;
  background-color: #1a1a1a;
  color: #686868;
}
.comment {
  padding-left: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #686868;
}
</style>
