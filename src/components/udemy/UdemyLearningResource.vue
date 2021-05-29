<template>
  <div>
    <the-border>
    <the-header title="Remember Me"></the-header>
    <!-- <stored-resources :resources="storedResources"></stored-resources> -->
    <the-resources></the-resources>
    </the-border>
  </div>
</template>

<script>
import TheHeader from '../../components/udemy/udemy-SecTen/TheHeader';
// ab yahan StoredResources component ki requirment nahi hai kyoki ab ye dynamic tabs ke through load hoga, but problem is that ki resources props kaise work karega ya hume use karna hai main ek copy ker li hai is component ki baad main compare ker lenge.
// import StoredResources from '../components/udemy/learning-resources/StoredResources';
import TheBorder from '../../components/udemy/udemy-SecTen/TheBorder.vue';
import TheResources from '../../components/udemy/udemy-SecTen/TheResources.vue';
export default {
  components: {
    // StoredResources, 
    TheHeader, 
    TheBorder,
    TheResources
    },
  data () {
    return {
      // yahan se hata ke TheResources component main put ker rahe hai
      // storedResources: [
      //   {
      //     id: 'official-guide',
      //     title: 'Vue Js',
      //     description: 'Learn from vue',
      //     link: 'https:// wwww.vuejs.org',
      //   },{
      //     id: 'google',
      //     title: 'Google',
      //     description: 'Learn from Google',
      //     link: 'https:// wwww.google.com',
      //   }
      // ]
    }
  },
  created() {
  },
  methods: {}
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
html {
  font-family: 'Roboto', sans-serif;
}
body {
  margin: 0;
}
</style>
