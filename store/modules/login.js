const state = {
  activeForm: false
}

// getters
const getters = {
  getActiveForm(state){
    return state.activeForm;
  },
}

// mutations
const mutations = {
  set_activeForm(state, check) {
    state.activeForm = check;
  },
}

// actions
const actions = {
}

export default {
  state,
  getters,
  mutations
}
