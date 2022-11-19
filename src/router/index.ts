import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import EventList from '@/views/EventList.vue'
import EventDetail from '@/views/EventDetail.vue'
import CreateEvent from '@/views/CreateEvent.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/create',
    name: 'CreateEvent',
    component: CreateEvent,
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    props: true,
    component: EventDetail,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
