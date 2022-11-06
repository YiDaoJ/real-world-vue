<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import EventCard from '@/components/EventCard.vue' // @ is an alias to /src
import { Event } from '@/types'
import EventService from '@/services/EventService'
import { AxiosResponse, AxiosError } from 'axios'

export default defineComponent({
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {
      events: Array as PropType<Array<Event>>,
    }
  },
  created() {
    EventService.getEvents()
      .then((res: AxiosResponse) => {
        console.log(res)
        this.events = res.data
      })
      .catch((err: AxiosError) => console.log(err))
  },
})
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
