import EventService from '@/services/EventService'
import { iEvent } from '@/types'
import { AxiosError, AxiosResponse } from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Max Ingwer',
    events: [] as iEvent[],
    event: {} as iEvent
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
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event)
        .then((res) => {
          commit('ADD_EVENT', res.data.event)
          return res.data.event
        })
        .catch((err: AxiosError) => {
          throw err
        })
    },

    fetchEvents({ commit }) {
      return EventService.getEvents()
        .then((res: AxiosResponse) => {
          commit('SET_EVENTS', res.data.events)
        })
        .catch((err: AxiosError) => {
          throw err
        })
    },

    fetchEvent({ commit, state }, id) {
      // if the event to fetch is already in state.events, there is no need to fetch it once more
      const existingEvent = state.events.find((evt) => evt.id === id)

      if (existingEvent) {
        commit('SET_EVENT', existingEvent)
      } else {
        return EventService.getEvent(id)
          .then((res: AxiosResponse) => {
            commit('SET_EVENT', res.data.event)
          })
          .catch((err: AxiosError) => {
            throw err
          })
      }
    }
  },
  // actions can wrap business logic around mutations, like loading status
  modules: {}
})
