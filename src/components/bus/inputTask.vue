<template>
  <div>
    <input v-model="task" @keypress.enter="addNewTask()"/>
  </div>
</template>
<script>
import { appBus } from '../../main'
export default {
  data () {
    return {
      task: ''
    }
  },
  methods: {
    addNewTask () {
      appBus.$emit('newTask', this.task);
      this.task = ''
    }
  }
}
</script>
