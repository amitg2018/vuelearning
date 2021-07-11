import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Udemy from "../views/Udemy.vue";
import ComponentPractice from "../views/CompoPractice.vue";
import ApiCall from "../views/apiCall/index.vue";
import ApiCallAxiosSingle from "../views/apiCall/views/AxiosSingle.vue";
import ApiCallFetchSingle from "../views/apiCall/views/FetchSingle.vue";
import ApiCallAxios from "../views/apiCall/views/Axioscall.vue";
import ApiCallFetch from "../views/apiCall/views/FetchCall.vue";

import Vuex from "../views/vuexCheck/index.vue";
import VuexOne from "../views/vuexCheck/views/vuexF.vue";
import VuexTwo from "../views/vuexCheck/views/vuexS.vue";

import VuexMonday from "../components/VuexMonday";

import PageNotFound from "../views/PageNotFound";
import Notes from "../views/Notes";

Vue.use(VueRouter);

const routes = [
  {
    // path: '/home/:id',
    path: "/home",
    name: "Home",
    component: Home,
    // alias: '/' alias ka bhi use ker sakte hai agar kisi ne sirf domain dala to hemesha home per hi aagea ya jis bhi page pe kerna hai wahan ise implement ker do.
  },
  {
    path: "/about",
    name: "About",
    components: { default: About, footer: Notes }, // multiple component calling
  },
  {
    path: "/udemy",
    name: "udemy",
    component: Udemy,
  },
  {
    path: "/vuex",
    // name: 'Vuex',
    component: Vuex,
    children: [
      {
        path: "",
        redirect: "/two",
      },
      {
        path: "/one",
        component: VuexOne,
        name: "vuexFirst",
      },
      {
        path: "/two",
        component: VuexTwo,
        name: "vuexTwo",
      },
    ],
  },
  {
    path: "/components",
    name: "Compo",
    component: ComponentPractice,
  },
  {
    path: "/apiCall",
    component: ApiCall,
    children: [
      {
        path: "",
        redirect: "/fetchSingle",
      },
      {
        path: "/fetch",
        component: ApiCallFetch,
        name: "FetchApiCall",
      },
      {
        path: "/axios",
        component: ApiCallAxios,
        name: "AxiosApiCall",
      },
      {
        path: "/fetchSingle",
        component: ApiCallFetchSingle,
        name: "FetchComponent",
      },
      {
        path: "/axiosSingle",
        component: ApiCallAxiosSingle,
        name: "AxiosComponent",
      },
    ],
  },
  {
    path: "/vuexMonday",
    name: "vuexMonday",
    component: VuexMonday, // multiple component calling
  },
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "*",
    component: PageNotFound,
  },
  /*{
    is tarah bhi ker sakte hai page not found ki jahan home ko bhi redirect key main daal sakte hai
    path: '/:notFound(.*)',
    component: PageNotFound
  }
  */
  // {
  //   path: '',
  //   redirect: '/apiCall'
  // }
];

const router = new VueRouter({
  mode: "history",
  routes,
  linkActiveClass: "active",
});

export default router;
