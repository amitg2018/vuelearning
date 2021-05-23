<template>
  <div>
    <ul style="list-style:none;">
      <li v-for="(task, index) in tasks" :key="index">
        {{task}}
      </li>
    </ul>
  </div>
</template>
<script>
import { appBus } from '../../main'
export default {
  data () {
    return {
      tasks: ['task1', 'task2', 'task3']
    }
  },
  created() {
        appBus.$on('newTask', (data) => {
        this.tasks.push(data)
      })
  },
  methods: {
  }
}
</script>
