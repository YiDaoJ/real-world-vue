import EventService from '@/services/EventService'
import { iEvent } from '@/types'
import { AxiosError, AxiosResponse } from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Max Ingwer',
    events: [] as iEvent[],
    event: {} as iEvent,
  },
  getters: {},
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, event) {
      state.event = event
    },
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
        .then(() => commit('ADD_EVENT', event))
        .catch((err: AxiosError) => console.log({ err }))
    },
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then((res: AxiosResponse) => {
          commit('SET_EVENTS', res.data.events)
        })
        .catch((err: AxiosError) => console.log(err))
    },
    fetchEvent({ commit, state }, id) {
      // if the event to fetch is already in state.events, there is no need to fetch it once more
      const existingEvent = state.events.find((evt) => evt.id === id)

      if (existingEvent) {
        commit('SET_EVENT', existingEvent)
      } else {
        EventService.getEvent(id)
          .then((res: AxiosResponse) => {
            commit('SET_EVENT', res.data.event)
          })
          .catch((err: AxiosError) => console.log(err))
      }
    },
  },
  // actions can wrap business logic around mutations, like loading status
  modules: {},
})
