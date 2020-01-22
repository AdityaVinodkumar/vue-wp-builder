<template>
  <div class="menu-toggle" v-show="!hidden">
    <div class="menu-toggle__header" @click="toggleMenu()">
      <span>{{menuHeader}}</span>
      <i v-if="isClosed" class="fa fa-chevron-down" color="#ffffff"></i>
      <i v-else class="fa fa-chevron-up" color="#ffffff"></i>
    </div>
    <div ref="content" class="menu-toggle__content" :class="{'is-closed': isClosed}" >
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'menu-toggle',
  props: {
    menuHeader: { type: String, default: '' },
    startClosed: { type: Boolean, dafault: false },
    hidden: { type: Boolean, dafault: false }
  },
  data: function () {
    return {
      initialized: false,
      isClosed: false,
      maxHeight: 'auto'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      // this.maxHeight = window.getComputedStyle(this.$refs.content)['height']
      this.isClosed = this.startClosed
    })
  },
  computed: {
    elStyle () {
      return this.isClosed ? { 'max-height': 0 } : { 'max-height': this.maxHeight }
    }
  },
  methods: {
    toggleMenu () {
      if (!this.isClosed) {
        // this.maxHeight = window.getComputedStyle(this.$refs.content)['height']
      }

      this.isClosed = !this.isClosed
      this.isClosed ? this.$emit('closed') : this.$emit('opened')
    }
  }
}
</script>

<style scoped>
.menu-toggle {
  border-bottom: 1px solid rgba(0,0,0,0.12);
}

.menu-toggle__header {
  height: 33px;
  padding: 5px 10px;
  /* font-size: small; */
  /* font-weight: bold; */
  cursor: pointer;
  color: rgba(255,255,255,.8);
  background: #313844;
}

.menu-toggle__header:hover {
  color: rgba(255,255,255,1)
}

.menu-toggle__header span {
  display: inline-block;
  width: calc(100% - 20px);
  user-select: none;
}

.menu-toggle__header .i {
  display: inline-block;
}

.menu-toggle__content {
  overflow: hidden;
  max-height: auto;
  transition: height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.menu-toggle__content.is-closed {
  max-height: 0;
}
</style>
