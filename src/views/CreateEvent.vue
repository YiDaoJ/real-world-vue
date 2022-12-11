<template>
  <h2>Create Event Forms</h2>
  <form @submit.prevent="submitForm">
    <BaseInput v-model="event.title" label="Title" type="text" />
    <BaseInput v-model="event.description" label="Descirption" type="text" />
    <BaseInput v-model="event.date" label="Date" type="date" />
    <BaseInput v-model="event.time" label="Time" type="time" />
    <BaseInput v-model="event.location" label="Location" type="text" />

    <BaseSelect
      label="Select a category"
      :options="categories"
      v-model="event.category"
    />

    <h3>Extras</h3>
    <BaseCheckbox v-model="event.extras.catering" label="Catering" />
    <BaseCheckbox v-model="event.extras.music" label="Music" type="checkbox" />

    <BaseRadioGroup
      v-model="event.petsAllowed"
      :options="petsOptions"
      name="pets"
      title="Are pets allowed"
    />

    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseRadioGroup from '@/components/BaseRadioGroup.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import { iEvent } from '@/types'
import { AxiosError } from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        id: '',
        category: '',
        title: '',
        description: '',
        location: '',
        time: '',
        date: '',
        extras: {
          catering: false,
          music: false
        },
        organizer: '' // avoid this.$store.state.data => can cause reactivity issuse
      } as iEvent,
      petsOptions: [
        { value: true, label: 'Yes' },
        { value: false, label: 'No' }
      ]
    }
  },
  // ATTN: via auto importing
  components: {
    BaseSelect,
    BaseInput,
    BaseCheckbox,
    BaseRadioGroup
  },
  methods: {
    submitForm() {
      const event = {
        ...this.event,
        organizer: this.$store.state.user
      }
      this.$store
        .dispatch('createEvent', event)
        .then((result) => {
          // lead to new router behavior
          this.$router.push({
            name: 'EventDetail',
            params: {
              id: result.id
            }
          })
        })
        .catch((error: AxiosError) => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error.message }
          })
        })
    }
  }
})
</script>

<style>
.field {
  margin-bottom: 24px;
}

form {
  width: 500px;
  padding: 1.5rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
}

label,
input,
optgroup,
select,
textarea {
  display: inline-flex;
  font-family: 'Open sans', sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

input {
  padding: 10px 24px 10px 10px;
}

label {
  margin-bottom: 0.25rem;
  justify-self: flex-start;
}

button {
  display: inline-block;
  padding: 1rem 2rem;
  margin-top: 1.5rem;

  font-size: 1.2rem;
  font-weight: 300;

  background-color: #42b983;
  cursor: pointer;
}
</style>
