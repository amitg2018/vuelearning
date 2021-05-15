<template>
  <div class="components">
    Home Page... {{text}} {{checkCounter}}
    <button-counter title="Hi" :post="post1" @parent-click="clickhere"></button-counter>
    <button-counter title="Hello" :post="post2" @parent-click="clickhere"></button-counter>
    <button-counter title="Namaskar" :post="post3" @parent-click="clickhere"></button-counter>
    <hr/>
    <blog-post :posts="posts" @changeText='TextChange($event)'>
      <!-- Hi How r u... 
      this content for slot if you need put content here anything please use slot for that.
      -->
      <!--
      <div slot="heading">Heading through slot Name</div>
      
      is tarah bhi likh sakte heading Hai.. Named Slots Shorthand
      <template #heading>Heading through slot Name</template>
      -->
    </blog-post>

    <!-- Create Dynamic Component call -->
    
    <dynamic-tab></dynamic-tab>
   
   
  </div>
</template>

<script>
/* $emit = but not clear
- https://www.youtube.com/watch?v=-_Nzq2GXSaY 
- https://www.youtube.com/watch?v=5pvG6fzkdFM
- 
this page good one for more clear
https://www.geeksforgeeks.org/communication-between-components-using-emit-and-props-in-vue-js/
*/
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ButtonCounter from "@/components/buttonCounter.vue";
import BlogPost from "@/components/BlogPost.vue";
import DynamicTab from "@/components/DynamicTab.vue";

export default {
  name: "Compo",
  components: {
    ButtonCounter,
    BlogPost,
    DynamicTab
    // HelloWorld,
  },
  data() {
    return {
      post1: 'Hi My first Click',
      post2: 'Hello My Second Click',
      post3: 'Namaskar My Third Click',
      posts: [
        {
        title: 'Callback',
        description: 'The function called for every array element. Its return values are added to the new array. It takes in'
        },
        {
        title: 'CurrentValue',
        description: 'The current element being passed from the array.'
        },
        {
        title: 'ThisArg',
        description: 'Value to use as this when executing callback. By default, it is undefined.'
        },
        {
        title: 'Return value',
        description: 'Returns a new array with elements as the return values from the callback function for each element.'
        }
      ],   
      text: 'Hi I Am changed from Parent',
      checkCounter: 0  
    };
  },
  methods: {
    TextChange(text) {
      this.text = text
    },
    clickhere (c) {
     return this.checkCounter = c;
      
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
