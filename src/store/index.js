import Vue from 'vue'
import Vuex from 'vuex'

import posts from './posts'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {

  },
  modules: {
    posts
  }
})
