<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="create-form">
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
        <el-link type="primary" style="margin-right: 10px;" @click="editData(todo)">edit</el-link>
        <el-link @click="deleteData(todo)">delete</el-link>
      </div>
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
    // GET Post Api Data
    async todoListFetch () {
      const postData = await fetch('https://jsonplaceholder.typicode.com/posts')
      const dataResponse = await postData.json()
      this.todoList = dataResponse;
      // console.log('===============>', postData)
      console.log('*************', dataResponse)
      // document.getElementById('dataShow').innerHTML = showAll
    },
    
    // Submit Data and Update Data to Api
    async submitData(type) {
      if( type === 'create') {
        alert('Create')
        const datasend = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: this.form.title,
            body: this.form.description,
            userId: 1
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        const datapost = await datasend.json()
        this.todoList.push(datapost)
        this.form.title = ''
        this.form.description =''
      } else {
        // here for update data
        this.createBtn = true
        console.log('Index==== ', this.getindex)
        const updateData = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.getindex}`, {
          method: 'PUT',
          body: JSON.stringify({
            id: this.getindex,
            title: this.form.title,
            body: this.form.description,
            userId: this.getindex,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        console.log('AAAAACheCCCCCCKKKKKK===== ', updateData)
        const update = await updateData.json()
        console.log('CheCCCCCCKKKKKK===== ', update)
        this.todoList.splice(this.getindex -1, 1, update);
        this.createBtn = false
        this.form.title = ''
        this.form.description =''
      }
    },

    // Delete Api Data
    async deleteData(todo) {
      try {
        const deleteTodo = await fetch(`https://jsonplaceholder.typicode.com/posts/${todo.id}`, {
        method: 'DELETE',
        });
       
       console.log('Delete Data ===== ', deleteTodo)
       this.todoList.splice(deleteTodo-1, 1);
       console.log('Delete index ===== ', todo.id)
        } catch(err){
        console.log('ERROR SHOW === ', err.message)
      }
    },
    
    // EDIT Api Data
    editData(todo) {
    //console.log('Update data')
    console.log('Check Click ID=== ', todo.id )
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
        // console.log('create Cancel');
        this.form = {
          title: '',
          description: ''
        }
      } else {
        // console.log('update cancel')
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
    border: 1px solid #e2e2e2;
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
