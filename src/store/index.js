import Vue from 'vue'
import Vuex from 'vuex'

import posts from './posts'
import beers from './beer2'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {

  },
  modules: {
    posts,
    beers
  }
})
