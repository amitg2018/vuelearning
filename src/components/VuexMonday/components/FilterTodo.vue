<template>
  <div style="display: flex; align-items: center">
    <h5>Filter Todos:</h5>
    <!-- Check kerna hai ki el-select ke sath kaise work karega -->
    <!-- <el-select
      v-model="value"
      placeholder="Select"
      size="mini"
      @change="filterTodos($event)"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select> -->
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      options: [
        {
          value: "200",
          label: "200",
        },
        {
          value: "100",
          label: "100",
        },
        {
          value: "50",
          label: "50",
        },
        {
          value: "20",
          label: "20",
        },
        {
          value: "10",
          label: "10",
        },
      ],
      value: "200",
    };
  },
  methods: {
    ...mapActions(["filterTodos"]),
  },
};
</script>
