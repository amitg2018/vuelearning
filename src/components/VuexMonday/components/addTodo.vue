<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Add</el-button>
        <el-button @click="cancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        title: "",
      },
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit() {
      // console.log("submit!");
      this.addTodo(this.form.title);
    },
    cancel() {
      this.form.title = "";
    },
  },
};
</script>
<style lang="scss" scoped></style>
