import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import auth from './auth'


export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  },
  plugins: [createPersistedState()],
})
