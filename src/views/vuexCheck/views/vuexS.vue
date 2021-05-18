<template>
  <div>
    <!-- 
      When we use Store no need pass Props and click $emit Event please check below code
      <result-check :clickCount="counting"></result-check>
    <counter-check @updated="counting += $event"></counter-check> -->
    <another-result></another-result>
    <result-check></result-check>
    <another-counter></another-counter>
    <counter-check></counter-check>
    
   
    
  </div>
</template>
<script>
import CounterCheck from '@/components/vuexS/counterNew'
import AnotherCounter from '@/components/vuexS/AnotherCounter'
import resultCheck from '@/components/vuexS/result'
import AnotherResult from '@/components/vuexS/AnotherResult'
export default {
  data() {
    return {
      counting: 0
    }
  },
  components: {
    CounterCheck,
    resultCheck,
    AnotherResult,
    AnotherCounter
  },
  methods: {}
}

// when you check actions please read 600 no( Mapping Actions to Methods).  tutorial with payload, for example
/* 
addingAction ({commit}, payload) {
  commit('adding', payload)
}
@click="addingAction(100)"
*/
// 601. A Summary of Vuex
// 602. two way binding
</script>



