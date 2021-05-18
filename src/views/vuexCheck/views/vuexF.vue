<template>
  <div class="home">
    <vuex-example title="Vuex" v-if="isAuth">
      <favorite-value></favorite-value>
     <counter></counter>
      <!-- <el-button @click="addCounter">+1</el-button> -->
      <el-button @click="removeCounter">-1</el-button>
      <!-- <el-button @click="counterTen">+10</el-button> -->
      <!-- <el-button @click="a">+1</el-button>
      <el-button @click="b({value:10})">+10</el-button> -->
       <el-button @click="incrementAction">+1</el-button>
      <el-button @click="increaseAction({value:10})">+10</el-button>
    </vuex-example>

    <vuex-example :title="user">
      <user-auth></user-auth>
    </vuex-example>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import VuexExample from '@/components/vuexF/vuexExample'
import Counter from '@/components/vuexF/counter';
import FavoriteValue from '@/components/vuexF/FavoriteValue';
import UserAuth from '@/components/vuexF/userAuth';
import { mapActions } from 'vuex';

export default {
  name: "Home",
  components: {
    VuexExample,
    Counter,
    FavoriteValue,
    UserAuth
  },
  data() {
    return {
      user: 'User Authantication'
    }
  },
  computed: {
    isAuth () {
      return this.$store.getters.userIsAuthenticated;
    }
  },
  methods: {
    ...mapActions(['incrementAction', 'increaseAction']),
   
   // yahan per object bhi use ker sakte hai key with value check below
    // ...mapActions({
    //   a: 'incrementAction',
    //   b: 'increaseAction'
    //   // use a and b as method name
    // }),

    // addCounter () {
    //   // this.$store.commit('increment')
    //   this.$store.dispatch('incrementAction')  
    // },
    removeCounter () {
      this.$store.state.counter < 1 ?  0 : this.$store.commit('decrement')      
    },
    // counterTen () {
    //  // this.$store.commit('increase', {value: 10})
    //   //============= is terah bhi likh sakte hai sirf object ke case main ==========
    //   /*
    //   this.$store.commit ({
    //     type: 'increase',
    //     value: 10
    //   })
    //   */

    //   this.$store.dispatch('increaseAction', {value: 10})

    // }
   }
};
</script>
<style lang="scss" scoped></style>
