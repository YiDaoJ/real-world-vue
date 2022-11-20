<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EventCard from '@/components/EventCard.vue' // @ is an alias to /src
import { AxiosError } from 'axios'

export default defineComponent({
  name: 'EventList',
  components: {
    EventCard,
  },
  created() {
    this.$store.dispatch('fetchEvents').catch((error: AxiosError) => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error.message },
      })
    })
  },
  computed: {
    events() {
      return this.$store.state.events
    },
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
