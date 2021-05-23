<template>
  <div>
    <el-button @click="emitMethod" size="mini" style="margin:10px 0">Start From Emit Method</el-button>

    <el-input v-model="task" @keypress.enter="addNewTask"></el-input>
  </div>
</template>
<script>
import { appBus } from '../../main'
export default {
  data () {
    return {
      // header: 'Hi I Am from Main Header...'
      task: ''
    }
  },
  methods: {
    addNewTask () {
      appBus.$emit('addTask', this.task)
    },
    emitMethod () {
      // appBus.$emit('clickMe', 'Here from main $emit' )
      appBus.$emit('clickMe', 'Here from main $emit')
      // alert('Emit Message')
    }

  }
}
</script>
