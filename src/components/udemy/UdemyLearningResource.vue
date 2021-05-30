<template>
  <div>
    <base-border>
    <base-header title="Remember Me"></base-header>
    <tabs-n-resources></tabs-n-resources>
    <!-- <resources-lists :resources="ResourcesLists"></resources-lists> -->
    </base-border>
  </div>
</template>

<script>
import BaseHeader from '../../components/udemy/udemy-SecTen/BaseHeader';
import BaseBorder from './udemy-SecTen/BaseBorder.vue';
import TabsNResources from './udemy-SecTen/TabsNResources.vue';

// ab yahan StoredResources component ki requirment nahi hai kyoki ab ye dynamic tabs ke through load hoga, but problem is that ki resources props kaise work karega ya hume use karna hai main ek copy ker li hai is component ki baad main compare ker lenge.

// import ResourcesLists from '../components/udemy/learning-resources/ResourcesLists';

export default {
  components: {
    BaseHeader, 
    BaseBorder,
    TabsNResources
    // ResourcesLists, 
   
    },
  data () {
    return {
      // yahan se hata ke tabsNResources component main put ker rahe hai
      // ResourcesLists: [
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
  }
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
