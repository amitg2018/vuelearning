<!-- source: https://www.youtube.com/watch?v=5lVQgZzLMHc&t=138s -->
<template>
  <div>
    <div class="">
      <h1>Double click on card</h1>
      <div><span class="complete-box"> </span> = Complete</div>
      <div><span class="incomplete-box"></span> = Incomplete</div>
    </div>
    <h3>{{ name }} - {{ counts }}</h3>
    <div class="all-items">
      <div
        @dblclick="onDblClick(todo)"
        class="item"
        v-for="todo in allTodos"
        :key="todo.id"
        :class="{ 'is-complete': todo.completed }"
      >
        {{ todo.id }}{{ todo.title }}
        <span @click="deleteTodo(todo.id)">X</span>
      </div>
    </div>

    <div v-for="product in products" :key="product.id">
      {{ product.name }} {{ product.year }}
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      name: "Todo Lists",
    };
  },
  computed: {
    ...mapGetters(["allTodos"]),
    // is tarah bhi use ker sakte hai aur abouve ...mapGetters main bhi ...mapGetters(["allTodos","allProdcuts"])
    products() {
      return this.$store.getters.allProdcuts;
    },
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updTodo);
    },
  },
};
</script>
<style lang="scss" scoped>
.all-items {
  display: flex;
  gap: 10px;
  flex-flow: wrap;
  .item {
    border: 1px solid #e2e2e2;
    padding: 5px 10px;
    position: relative;
    background: green;
    width: 20%;
    span {
      position: absolute;
      right: -8px;
      top: -8px;
      border: 1px solid #f2f2f2;
      background: #ddf6fd;
      display: flex;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      font-size: 8px;
      color: #000;
      visibility: hidden;
      cursor: pointer;
    }
    &:hover {
      background: #ddf6fd;
      border: 1px solid #ddf6fd;
      span {
        visibility: visible;
        border: 1px solid #e2e2e2;
      }
    }
  }
}
.complete-box {
  background: rgb(0, 0, 0);
  width: 10px;
  height: 10px;
  display: inline-block;
}
.incomplete-box {
  background: green;
  width: 10px;
  height: 10px;
  display: inline-block;
}
.is-complete {
  background: #000 !important;
  color: #fff;
}
</style>
