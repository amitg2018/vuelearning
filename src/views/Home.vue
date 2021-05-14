<template>
  <div class="home">
    Home Page...
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
    },
    
    // Submit Data and Update Data to Api
    async submitData(type) {
      if( type === 'create') {
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
        const update = await updateData.json()
        this.todoList.splice(this.getindex -1, 1, update);
        this.createBtn = false
        this.form.title = ''
        this.form.description =''
      }
    },

    // Delete Api Data
    async deleteData(todo) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${todo.id}`, {
        method: 'DELETE',
        });
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
