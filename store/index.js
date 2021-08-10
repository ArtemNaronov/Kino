import Vue from 'vue'
import Vuex from 'vuex'
import card from './modules/card'
import login from './modules/login'
Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      card,
      login
    }
  })
}
export default createStore
