<template>
  <div class="home"> 
    <img alt="Vue logo" src="../../../assets/logo.png" style="margin-bottom: 30px; height: 81px"/>
    <form-data
      :getFormData="form"
      :submit="submitData"
      :cancel="cancel"
      :btn="updateBtn">
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
import FormData from '../components/formProps.vue'
import Lists from '../components/lists.vue'
export default {
  components: {
    Lists,
    FormData
  },
  data() {
    return {
      getindex: '',
      updateBtn: false,
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
    
    // Delete Api Data
    async deleteData(item) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}`, {
        method: 'DELETE',
        });
       this.todoList.splice(item.id-1, 1);
       console.log('===== ', this.todoList)
        } catch(err){
        console.log('ERROR SHOW === ', err.message)
      }
    },
    
    // EDIT Api Data
    editData(item) {
    this.updateBtn = true
      this.form = {
        title: item.title,
        description: item.body
      }
      this.getindex = item.id
    },

    // Create and Update Data
    async submitData(type) {
      if( type === 'create') {
        console.log('create link through Props')
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
        console.log('update link through Props')
        this.updateBtn = true
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
        this.updateBtn = false
        this.form.title = ''
        this.form.description =''
      }
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
        this.updateBtn = false
      }

    }
  }
}
</script>
<style lang="scss" scoped>
</style>
