import axios, { AxiosInstance } from 'axios'

import { iEvent } from '@/types'

// single axios instance could be used fot the entire app
const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4090', // mock server stubsPort
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id: string) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event: iEvent) {
    return apiClient.post('/events', { event })
  }
}
