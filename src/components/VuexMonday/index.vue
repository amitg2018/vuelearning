<template>
  <div>
    <add-todo></add-todo>
    <lists-todo></lists-todo>
  </div>
</template>
<script>
import ListsTodo from "./components/ListsTodo";
import AddTodo from "./components/AddTodo";
export default {
  data() {
    return {};
  },
  components: {
    ListsTodo,
    AddTodo,
  },
};
</script>
<style lang="scss" scoped></style>
