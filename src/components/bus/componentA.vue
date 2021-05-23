<template>
  <div>Component A
    <h4>{{message}}</h4>
  </div>
</template>
<script>
import { appBus } from '../../main'
export default {
  data () {
    return {
      message: 'Hi I am message'

    }
  },
  mounted () {
    appBus.$on('clickMe', (data) => {
      this.message = data;
    })
  }
}
</script>
