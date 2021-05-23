<template>
  <div class="about">
    <img alt="Axios logo" src="../../../assets/axios.png"  width="200" style="margin-bottom: 30px;"/>
    <form-data
      :getFormData="form"
      @submit-data="submitData"
      :cancel="cancel"
      :btn="createBtn">
      </form-data>
    <lists
      :getItems="todoList"
      :deleteItem="deleteData"
      :editItem="editData">
    </lists>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import FormData from '../components/formEmit.vue'
import Lists from '../components/lists.vue'
export default {
  components: {
    Lists,
    FormData
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
        // alert('Create')
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
         // alert('Update')
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

    // async createData() {
    //   alert('Create')
    //   const addData = {
    //       title: this.form.title,
    //       body: this.form.description,
    //   }
    //   const datasend = await axios.post('https://jsonplaceholder.typicode.com/posts', addData)
    //   const datapost = await datasend.data
    //   this.todoList.push(datapost)
    //   this.form.title = ''
    //   this.form.description =''
    // },
    // async updateData() {
    //   // here for update data
    //     alert('Update')
    //   this.createBtn = true
    //   const updateitem = {
    //       id: this.getindex,
    //       title: this.form.title,
    //       body: this.form.description,
    //       userId: this.getindex,
    //     }
    //   const updateData = await axios.put(`https://jsonplaceholder.typicode.com/posts/${this.getindex}`, updateitem)
    //   const update = updateData.data
    //   this.todoList.splice(this.getindex -1, 1, update);
    //   this.createBtn = false
    //   this.form.title = ''
    //   this.form.description =''
    // },

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
/deep/ .el-button--primary:hover {
    color: #FFF;
    background-color: #854196;
    border-color: #854196;
}

</style>
