import Vue from 'vue'
import Vuex from 'vuex'
import card from './modules/card'
Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      card
    }
  })
}
export default createStore
