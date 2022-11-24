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
import { AxiosError } from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  created() {
    this.$store.dispatch('fetchEvent', this.id).catch((error: AxiosError) => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error.message }
      })
    })
  },
  computed: {
    event() {
      return this.$store.state.event
    }
  }
})
</script>
