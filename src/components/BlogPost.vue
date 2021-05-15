<template>
  <div class="blog">
    <el-button @click="updateText">Update Text</el-button>
    <div class="blog-content" v-for="item in posts" :key='item.id'>
      <h4>{{item.title}}</h4>
      <p>{{item.description}}</p>
      <!-- 
        if you want every time content write from parant than use slot
        <slot></slot>
       -->
       <!-- Named Slot -->
       <slot name="heading"></slot>
      <!-- V-html use -->
      <!-- <p v-html="item.description"></p> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  // define this type of also, I have ran and tested this code...
  // props: ['posts']
  data() {
    return {
    }
  },
  methods: {
    updateText() {
      // alert('hi')
      this.$emit('changeText','Hello I am from Child')
    }
  }
}
</script>
<style lang="scss" scoped>
.blog {
  display: flex;
  gap: 15px;
  .blog-content {
    border: 1px solid #e2e2e2;
    margin: 10px 0;
    padding: 0;
    width: 50%;
    h4 {
      font-size: 14px;
      font-weight: 600;
      margin: 0 0 5px;
      padding: 5px;
      color: rgb(10, 72, 165);
    }
    p {
      font-size: 14px;
      font-weight: 400;
      margin: 0;
      padding: 5px;
      color: #666;
    }
  }
}
</style>
