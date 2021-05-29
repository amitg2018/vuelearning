<template>
<el-button :size="size" :type="type" :class="mode" @click="btnClicked()">
  <!-- Default button when even you don't set any name in component then show button text in default -->
  <slot>Button</slot>
</el-button>
</template>

<script>
export default {
  props: ['size', 'type', 'mode'],
  methods: {
    btnClicked () {
      this.$emit('click')
    }
  }
}
</script>
<style scoped>
.amit{
  border: 1px solid black;
}
.sumit {
  border: 1px solid green;
}
</style>
