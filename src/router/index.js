import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import ApiCall from '../views/apiCall/index.vue'
import ApiCallAxiosSingle from '../views/apiCall/views/AxiosSingle.vue'
import ApiCallFetchSingle from '../views/apiCall/views/FetchSingle.vue'
import ApiCallAxios from '../views/apiCall/views/Axioscall.vue'
import ApiCallFetch from '../views/apiCall/views/FetchCall.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/apiCall',
    name: 'ApiCall',
    component: ApiCall,
    children: [
      {
        path: '',
        redirect: '/fetchSingle',
      },
      {
        path: '/fetch',
        component: ApiCallFetch,
        name: 'FetchApiCall',
      },
      {
        path: '/axios',
        component: ApiCallAxios,
        name: 'AxiosApiCall',
      },
      {
        path: '/fetchSingle',
        component: ApiCallFetchSingle,
        name: 'FetchComponent',
      },
      {
        path: '/axiosSingle',
        component: ApiCallAxiosSingle,
        name: 'AxiosComponent',
      },
    ]
  },
  {
    path: '',
    redirect: '/home'
  }
  // {
  //   path: '',
  //   redirect: '/apiCall'
  // }
];





const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
