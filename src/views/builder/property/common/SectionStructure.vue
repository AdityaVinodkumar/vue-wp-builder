<template>
<!-- <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="Consistency" name="1"> -->
  <div class="section-structure">
      <div class="element-list">
        <div v-for="type in elTypeList"
          :key="type"
          @click="onClickElement(type)"
        >
          <img class="element" :src="'img/property/section-' + type + '.png'" draggable="false"/>
        </div>
      </div>
  </div>
  <!-- </el-collapse-item> -->
  <!-- <el-collapse/> -->
</template>

<script lang="js">

export default {
  name: 'section-structure',
  components: { },
  props: {
    layout: Object
  },
  data () {
    return {
      elTypeList: ['1_1', '1_2', '1_3', '1_3-2_3', '2_3-1_3', '1_4', '1_4-3_4', '3_4-1_4']
    }
  },
  computed: {
  },
  methods: {
    onClickElement (type) {
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>

.section-structure{
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

}
.element-list {
  margin-left:10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
.element{
  width: 75px;
  height: 55px;
  margin: 5px 10px 5px 10px !important;
  border-radius: 3px !important;
  border-width: 1px;
  border-color: #555555;
  border-style: solid;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.25);
  }
  &:active {
    box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0.25);
  }
  user-select: none;
}
</style>
