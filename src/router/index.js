import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Udemy from '../views/Udemy.vue';
import ComponentPractice from '../views/CompoPractice.vue';
import ApiCall from '../views/apiCall/index.vue'
import ApiCallAxiosSingle from '../views/apiCall/views/AxiosSingle.vue'
import ApiCallFetchSingle from '../views/apiCall/views/FetchSingle.vue'
import ApiCallAxios from '../views/apiCall/views/Axioscall.vue'
import ApiCallFetch from '../views/apiCall/views/FetchCall.vue'

import Vuex from '../views/vuexCheck/index.vue'
import VuexOne from '../views/vuexCheck/views/vuexF.vue'
import VuexTwo from '../views/vuexCheck/views/vuexS.vue'

import PageNotFound from '../views/PageNotFound'

Vue.use(VueRouter);

const routes = [
  {
    // path: '/home/:id',
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
    path: '/udemy',
    name: 'udemy',
    component: Udemy
  },
  {
    path: '/vuex',
    // name: 'Vuex',
    component: Vuex,
    children: [
      {
        path: '',
        redirect: '/two',
      },
      {
        path: '/one',
        component: VuexOne,
        name: 'vuexFirst',
      },
      {
        path: '/two',
        component: VuexTwo,
        name: 'vuexTwo',
      },
    ]
  },
  {
    path: '/components',
    name: 'Compo',
    component: ComponentPractice
  },
  {
    path: '/apiCall',
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
  },
  {
    path: '*',
    component: PageNotFound
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
