<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>
      <span v-if="event.time">{{ event.time }} on {{ event.date }} </span> @
      {{ event.location }}
    </p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  created() {
    this.$store.dispatch('fetchEvent', this.id)
  },
  computed: {
    event() {
      return this.$store.state.event
    },
  },
})
</script>
