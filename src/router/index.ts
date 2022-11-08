import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import EventList from '@/views/EventList.vue'
import AboutView from '@/views/AboutView.vue'
import EventDetail from '@/views/EventDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
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
