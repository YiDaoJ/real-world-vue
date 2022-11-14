<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script lang="ts">
import EventService from '@/services/EventService'
import { AxiosError, AxiosResponse } from 'axios'
import { iEvent } from '@/types'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      event: {} as iEvent,
    }
  },
  created() {
    // fetch event (by id) and set local date
    EventService.getEvent(this.id)
      .then((res: AxiosResponse) => {
        this.event = res.data.event
      })
      .catch((err: AxiosError) => console.log(err))
  },
})
</script>
