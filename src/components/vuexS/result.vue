<template>
  <div>Click Counts Result: {{count}}</div>
</template>
<script>
export default {
  /* Props ki jagah jab store use ker rahe hai to compute property use kare below code
  props: ['clickCount']
  */
 computed: {
   count () {
     /* har component ke computed property main changes na kerne pade aur problem se bachne ke liye getters ka use kerte hai getter main implement kerke yahan is tarah likhte hai check below code
     return this.$store.state.counting;
     */
    return this.$store.getters.finalCounting
   }
 }
}
</script>
