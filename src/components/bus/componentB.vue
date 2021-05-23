<template>
  <div>Component B
    <h4>{{title}}</h4>
  </div>
</template>
<script>
import { appBus } from '../../main'
export default {
  data () {
    return {
      title: 'Hi I am Title'

    }
  },
  mounted () {
    appBus.$on('clickMe', (data) => {
      this.title = data;
    })
  }
}
</script>
