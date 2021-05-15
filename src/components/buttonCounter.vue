<template>
  <div>
    <div>{{title}}</div>
    <div>{{post}}</div>
    <el-button size="mini" @click="count++">{{count}}</el-button>
    <el-button size="mini" @click="checkcounter">Click Time - {{count}}</el-button>
   
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    post: {
      type: String,
    }
  },

  data() {
    return {
      count: 0
    }
  },

  methods: {
    checkcounter(){
      this.count++
      this.$emit('parent-click', this.count)
    }
  }
  
}
</script>
