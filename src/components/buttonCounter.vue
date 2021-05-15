<template>
  <div>
    <div>{{title}}</div>
    <div>{{post}}</div>
    <el-button size="mini" @click="count++">Click Time - {{count}}</el-button>
    <el-button @click="checkEmit">Check Emit Event</el-button>
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
    checkEmit(){
      this.$emit('parent-click')
    }
  }
  
}
</script>
