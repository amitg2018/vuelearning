<template>
  <ul>
    <resource-block
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></resource-block>
  </ul>
</template>

<script>
import ResourceBlock from './ResourceBlock';
export default {
  // props ki jagah inject kerna hai jo resources ko get ker sake, aur storeResources main provide method data main banana hai.
  // props: {
  //   resources: {
  //     type: Array
  //   }
  // },
  inject: ['resources'],
  components: { ResourceBlock }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
