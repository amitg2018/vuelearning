<template>
  <div class="the-border">
    <slot></slot>
  </div>
</template>
<style scoped>
.the-border {
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px;
  padding: 0
}
</style>
