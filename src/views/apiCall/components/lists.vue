<template>
  <div>
    <div class="todo-list-data">
      <div class="dataShow" v-for="item in getItems" :key="item.id">
        <h1>{{ item.id }} - {{ item.title }}</h1>
        <p>{{ item.body }}</p>
        <el-link type="primary" style="margin-right: 10px;" @click="editItem(item)">Edit</el-link>
        <el-link @click="deleteItem(item)">Delete</el-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    getItems: {
      type: Array,
      required: true
    },
    deleteItem: {
      type: Function,
      required: true
    },
    editItem: {
      type: Function,
      required: true
    }
  }
};
 </script>
<style lang="scss" scoped>
/deep/ .el-button--primary {
    color: #FFF;
    background-color: #41b883;
    border-color: #41b883;
}
/deep/ .el-link.el-link--primary {
    color: #41b883;
}
.create-form {
  margin: 0 auto;
  width: 50%;
}
.todo-list-data {
  margin: 0;
  padding: 0;
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
  justify-content: center;
  .dataShow {
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid #41b883;
    flex-direction: column;
    width: 30%;
    h1 {
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 5px;
      padding: 5px 10px;
      background: #f2f2f2;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.2;
      margin: 0;
      padding: 5px 10px;
      background: #fff;
    }
  }
}
</style>
