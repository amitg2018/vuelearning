<template>
  <div>
    <h5>Counter click Component</h5>
   <!-- 
      <el-button @click="adding">add</el-button>
    <el-button @click="removing">remove</el-button>
     -->
     <el-button @click="addingAction">add</el-button>
    <el-button @click="removingAction">remove</el-button>
  </div>
</template>
<script>
// import { mapMutations} from 'vuex'
import { mapActions} from 'vuex'
export default {
  methods: {
   /* adding () {
      /* is $emit ki jagah Direct Store se Counting call ker le
      this.$emit('updated', 1)
      
     /*
     aur yahan state ko call na ker ke mutation ko likh sakte hai jo method yaha likha hai wo mutation main likh ker - please check below code
      this.$store.state.counting++; 
     
    
    // from mutation call method as a string with commit
    this.$store.commit('adding')
    },
    removing () {
      /* is $emit ki jagah Direct Store se Counting call ker le
      this.$emit('updated', -1)
      */
     
     /*
     aur yahan state ko call na ker ke mutation ko likh sakte hai jo method yaha likha hai wo mutation main likh ker - please check below code
      this.$store.state.counting--; 
    


     // from mutation call method as a string with commit
    this.$store.commit('removing')
    },
    */


    /* All Above lengthy code use mapMutation on of top and add with ... */
   //  ...mapMutations(['adding', 'removing'])
   
   // How to use Actions
   /* adding() {
      return this.$store.dispatch('addingAction')
    },
    removing() {
      return this.$store.dispatch('removingAction')
    }
    */
    // how to use mapActions
    ...mapActions(['addingAction','removingAction'])
  }
}
</script>
