<template>
  <div>create event forms</div>
  <form>
    <BaseInput v-model="event.title" label="Title" type="text" />
    <BaseInput v-model="event.description" label="Descirption" type="text" />
    <BaseInput v-model="event.location" label="Location" type="text" />
  </form>
</template>

<script lang="ts">
import { iEvent } from '@/types'
import { defineComponent } from 'vue'
import BaseInput from '@/components/BaseInput.vue'

export default defineComponent({
  components: {
    BaseInput,
  },
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community',
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
      } as Partial<iEvent>,
    }
  },
})
</script>
