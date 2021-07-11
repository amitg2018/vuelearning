<template>
  <div>
    <h3>{{ name }}</h3>
    <div class="all-items">
      <div class="item" v-for="todo in allTodos" :key="todo.id">
        {{ todo.title }}
        <span>X</span>
      </div>
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
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(["fetchTodos"]),
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
</style>
