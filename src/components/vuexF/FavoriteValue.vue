<template>
  <div>
    {{counter}}
    Stop on 100...
  </div>
</template>
<script>
export default {
  computed: {
    counter() {
      // return this.$store.state.counter - this is for state call
      return this.$store.getters.normalizeCounter
    }
  }
}
</script>
