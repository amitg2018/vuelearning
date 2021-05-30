<template>
  <div id="border">
    <slot></slot>
  </div>
</template>
<style scoped>
#border {
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px;
  padding: 0
}
</style>
