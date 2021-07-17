<template>
  <div>
    <add-todo></add-todo>
    <filter-todo></filter-todo>
    <lists-todo></lists-todo>
  </div>
</template>
<script>
import ListsTodo from "./components/ListsTodo";
import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";
export default {
  data() {
    return {};
  },
  components: {
    ListsTodo,
    AddTodo,
    FilterTodo,
  },
};
</script>
<style lang="scss" scoped></style>
