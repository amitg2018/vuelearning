<template>
  <div>
    <!--
      1.
      this option when we use computed propert method write individual like count and stringCount method and assign getters method name
     -->
    <!-- <p>Click Counts: {{count}}</p>
    <p>{{stringCount}}</p> -->
    
    <p>Click Counts Another Result: {{count}}</p>
    <p>{{stringCount}}</p>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  /* Props ki jagah jab store use ker rahe hai to compute property use kare below code
  props: ['clickCount']
  */
 computed: {
   /* 
    computed property main count and stringCount two methods likhe hai, but code ko clean aur kam likhne ke liye map getters  ka use kerte hai..
    */
   // first option with array
   
   // but aaray ke case main wahi method name upper use kerna hoga jo yahan aur getters method main diya hai
  // ...mapGetters(['anotherCounting','stringCounter']), 
   
  //second option with object
  // but object ke case main calling name change ker sakte hai like below code
   ...mapGetters({
     count: 'anotherCounting',
     stringCount: 'stringCounter'}),
  
  /*
  har component ke computed property main changes na kerne pade aur problem se bachne ke liye getters ka use kerte hai getter main implement kerke yahan is tarah likhte hai check below code
  return this.$store.state.counting;
  count () {
    return this.$store.getters.anotherCounting
   },
  stringCount () {
    return this.$store.getters.stringCounter;
   }
  */
 }


}
</script>
