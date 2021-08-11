import Vue from 'vue'
import Vuex from 'vuex'
import card from './modules/card'
import games from './modules/games'
import login from './modules/login'
Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      card,
      games,
      login
    }
  })
}
export default createStore
