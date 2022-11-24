import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import EventDetail from '@/views/EventDetail.vue'
import CreateEvent from '@/views/CreateEvent.vue'
import ErrorDisplay from '@/views/ErrorDisplay.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/create',
    name: 'CreateEvent',
    component: CreateEvent
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    props: true,
    component: EventDetail
  },
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    props: true,
    component: ErrorDisplay
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
