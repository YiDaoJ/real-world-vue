<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDetail', params: { id: event?.id } }"
  >
    <div class="event-card">
      <span v-if="event.time">@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
      <span>{{ event.description }}</span>
    </div>
  </router-link>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { iEvent } from '../types'

export default defineComponent({
  name: 'EventCard',
  props: {
    event: {
      type: Object as PropType<iEvent>,
      required: true
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
