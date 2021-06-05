<template>
  <base-button @click="information">Provide/Inject {{information.num}}</base-button>
</template>
<script>
import BaseButton from './BaseButton'
export default {
  components: {
    BaseButton
  },
  data() {
    return {
    }
  },
  inject: ['information'],
}
</script>
