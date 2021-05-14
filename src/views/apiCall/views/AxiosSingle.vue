<template>
  <div class="about">
    <img alt="Axios logo" src="../../../assets/axios.png"  width="200" style="margin-bottom: 30px;"/>
    <div class="create-form">
      AXIOS
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input type="textarea" v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item>
          <div v-if="createBtn">
          <el-button type="primary" @click="submitData('update')">Update</el-button>
          <el-button @click="cancel('update')">Cancel</el-button>
          </div>
          <div v-else>
          <el-button type="primary" @click="submitData('create')">Create</el-button>
          <el-button @click="cancel('create')">Cancel</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="todo-list-data">
      <div class="dataShow" v-for="todo in todoList" :key="todo.id">
        <h1>{{ todo.id }} - {{ todo.title }}</h1>
        <p>{{ todo.body }}</p>
        <el-link type="primary" style="margin-right: 10px;" @click="editData(todo)">Edit</el-link> 
        <el-link @click="deleteData(todo)">Delete</el-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// https://jsonplaceholder.typicode.com/guide/
// https://github.com/axios/axios
// https://jasonwatmore.com/post/2020/07/23/vue-axios-http-post-request-examples
// https://www.digitalocean.com/community/tutorials/vuejs-rest-api-axios
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from 'axios';
export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      getindex: '',
      createBtn: false,
      todoList: [],
      form: {
        title: '',
        description: ''
      }
    };
  },

  created() {
    this.todoListFetch();
  },

  methods: {
    // GET Api Data
    async todoListFetch () {
      try {
        const postData = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.todoList = postData.data;
      } catch (err) {
        console.log(err.message)
      }
    },
    
    // Submit Data and Update Data to Api
    async submitData(type) {
      if( type === 'create') {
        const addData = {
          title: this.form.title,
          body: this.form.description,
        }
        const datasend = await axios.post('https://jsonplaceholder.typicode.com/posts', addData)
        const datapost = await datasend.data
        this.todoList.push(datapost)
        this.form.title = ''
        this.form.description =''
      } else {
        // here for update data
        this.createBtn = true
        const updateitem = {
          id: this.getindex,
          title: this.form.title,
          body: this.form.description,
          userId: this.getindex,
        }
        const updateData = await axios.put(`https://jsonplaceholder.typicode.com/posts/${this.getindex}`, updateitem)
        const update = updateData.data
        this.todoList.splice(this.getindex -1, 1, update);
        this.createBtn = false
        this.form.title = ''
        this.form.description =''
      }
    },

    // Delete Api Data
    async deleteData(todo) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${todo.id}`);
        this.todoList.splice(todo.id-1, 1);
      } catch(err){
        console.log('ERROR SHOW === ', err.message)
      }
    },
    
    // EDIT Api Data
    editData(todo) {
    this.createBtn = true
      this.form = {
        title: todo.title,
        description: todo.body
      }
      this.getindex = todo.id
    },

    // Cancel create and Update form Data
    cancel(type) {
      if(type === 'create') {
        this.form = {
          title: '',
          description: ''
        }
      } else {
        this.form = {
          title: '',
          description: ''
        }
        this.createBtn = false
      }

    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .el-button--primary {
    color: #FFF;
    background-color: #854196;
    border-color: #854196;
}
/deep/ .el-link.el-link--primary {
    color: #854196;
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
    border: 1px solid #854196;
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
