<template>
  <div class="create-form">
    <h1>Fill Details - E</h1>
    <el-form ref="getFormData" :model="getFormData" label-width="120px">
      <el-form-item label="Title">
        <el-input v-model="getFormData.title"></el-input>
      </el-form-item>
      <el-form-item label="Description">
        <el-input type="textarea" v-model="getFormData.description"></el-input>
      </el-form-item>
      <!-- $emit through -->
      <el-form-item>
        <div v-if="btn">
        <el-button type="primary" @click="submit('update')">Update</el-button>
        <el-button @click="cancel('update')">Cancel</el-button>
        </div>
        <div v-else>
        <el-button type="primary" @click="submit('create')">Create</el-button>
        <el-button @click="cancel('create')">Cancel</el-button>
        </div>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    getFormData: {
      type: Object,
      required: true
    },
    // props through
    // submit: {
    //   type: Function,
    //   required: true
    // },
    cancel: {
      type: Function,
      required: true
    },
    btn: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    submit(type) {
      this.$emit('submit-data', type)
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
</style>
