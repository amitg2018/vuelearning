<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link :to="{name: 'Home', params: {id: 123}}">Home</router-link> | -->
      <router-link :to="{name: 'Home'}" class="active">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/apiCall">API Call</router-link> |
      <router-link to="/components">Component</router-link> |
      <router-link to="/vuex">Vuex</router-link> | 
      <router-link to="/udemy">Udemy</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.active
{ color: #42b983;}

#nav a.router-link-exact-active {
  color: #42b983;
} 
#nav a.router-link-active {
  color: #42b983;
}

// .main-links,
// .main-links ul {
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   // display: flex;
//   // flex-direction: row;
//   li {
//     a {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       width: 100%;
//       height: 66px;
//       color: #fff;
//       background-color: transparent;
//       cursor: pointer;
//       margin: 0;
//       outline: none;
//       box-sizing: border-box;
//       border-right: 4px solid transparent;
//       .active {
//         color: #42b983 !important;
//       }
//     }
//   }
// }
</style>
