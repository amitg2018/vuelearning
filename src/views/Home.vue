<template>
  <div class="home">
   Home Page 
   <!-- {{$route.params.id}}... -->

   <p>{{message}}</p>
   <p>{{reverseText}}</p>
   <h1>Computed properties</h1>
   <p>Computed properties are used to calculate the properties which are displayed in the view. These calculations will be cached and will only update if necessary. The difference between computed properties and a method is the computed properties are cached and change only when their dependencies change. A method will evaluate every time it is invoked.
     reverseText: function (val) {
      return this.val.split(' ').reverse().join(' ');
    }
    How to pass Argument in computed property

</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Amit',
      message: 'This is home page'
    }
  },
  computed: {
    reverseText: function () {
      return this.message.split(' ').reverse().join(' ');
    }
  },
  mounted() {
    // console.log('ROUTER====', this.$router)
    // console.log('ROUTE', this.$route)
  }
}
</script>
<style lang="scss" scoped></style>
