import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import posts from './posts'
import beer2 from './beer2'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    ...posts,
    ...beer2    
  ]
});