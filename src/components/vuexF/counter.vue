<template>
  <div>
    <!-- 
      when required then use counter method inside computed object
      {{counter}} 
    -->
    <!-- when use this type when use mapGetter below  -->
    {{finalCounter}}

  </div>
</template>
<script>
// map Helpers
import {mapGetters} from "vuex"
export default {
  computed: {
    ...mapGetters(['finalCounter'])
    /*
    counter() {
      // return this.$store.state.counter - this is for state call
      // return this.$store.getters.finalCounter - this is a single getter call with counter name

    }
    */
  }
}
</script>
