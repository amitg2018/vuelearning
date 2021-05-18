<template>
  <div class="block">
    <h4>{{ title }}</h4>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props:{
    title: {
      type: String,
      default: 'Welcome'
    }
  } 
}
</script>
<style lang="scss" scoped>
.block {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  h2 {
  text-align: center;
  display: block;
  }
}


</style>
