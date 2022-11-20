<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EventCard from '@/components/EventCard.vue' // @ is an alias to /src

export default defineComponent({
  name: 'EventList',
  components: {
    EventCard,
  },
  created() {
    this.$store.dispatch('fetchEvents')
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
