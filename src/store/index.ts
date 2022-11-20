import { iEvent } from '@/types'
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Max Ingwer',
    events: [] as iEvent[],
  },
  getters: {},
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
  },
  actions: {},
  modules: {},
})
