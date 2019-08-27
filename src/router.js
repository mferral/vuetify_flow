import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Page1 from './views/Page1.vue'
import Page4 from './views/Page4.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page4',
      name: 'page4',
      component: Page4
    },
  ]
})
