<template>
  <div>
    <el-button type="primary" size="mini" @click="login" v-if="!isAuth">Login</el-button>
    <el-button type="default" size="mini" @click="logout" v-if="isAuth">Logout</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    login () {
      this.$store.dispatch('login')
    },
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    isAuth () {
      return this.$store.getters.userIsAuthenticated;
    }
  }
}
</script>

