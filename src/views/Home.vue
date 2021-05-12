<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="">
      <ul id="dataShow" v-for="todo in todoList" :key="todo.id">
        <li>{{ todo.id }} - {{ todo.title }}</li>
        <li>{{ todo.body }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      todoList: []
    };
  },

  created() {
    this.todoListFetch();
  },

  methods: {
    async todoListFetch () {
      const postData = await fetch('https://jsonplaceholder.typicode.com/posts')
      const dataResponse = await postData.json()
      this.todoList = dataResponse;
      // console.log('===============>', postData)
      console.log('*************', dataResponse)
      // document.getElementById('dataShow').innerHTML = showAll
    }
  }
};
</script>
