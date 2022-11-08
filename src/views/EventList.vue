<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EventCard from '@/components/EventCard.vue' // @ is an alias to /src
import { iEvent } from '@/types'
import EventService from '@/services/EventService'
import { AxiosResponse, AxiosError } from 'axios'

export default defineComponent({
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {
      events: [] as iEvent[],
    }
  },
  created() {
    EventService.getEvents()
      .then((res: AxiosResponse) => {
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
