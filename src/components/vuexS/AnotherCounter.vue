<template>
  <div>
    <h5>Counter click Another Component</h5>
    <!-- 
      <el-button @click="adding">add</el-button>
    <el-button @click="removing">remove</el-button>
     -->
     <el-button @click="addingAction(20)">add</el-button>
    <el-button @click="removingAction">remove</el-button>
  </div>
</template>
<script>
// import { mapMutations} from 'vuex'
import { mapActions} from 'vuex'
export default {
  methods: {
    /*
    adding () {
      /* is $emit ki jagah Direct Store se Counting call ker le
      // this.$emit('updated', 1)
      
     // this call direct from state 
     // this.$store.state.counting++;
     
     // this call from mutation access state
     this.$store.commit('adding');
    },
    removing () {
      /* is $emit ki jagah Direct Store se Counting call ker le
      this.$emit('updated', -1)
      
     
     // this call direct from state 
     // this.$store.state.counting--;
     
     // this call from mutation access state
     this.$store.commit('removing');
    },
    */
    /* All Above lengthy code use mapMutation on of top and add with ... */
   //  ...mapMutations(['adding', 'removing'])
   
   // How to use Actions sparate
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
