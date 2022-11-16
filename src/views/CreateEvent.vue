<template>
  <h2>create event forms</h2>
  <form @submit.prevent="submitForm">
    <BaseInput v-model="event.title" label="Title" type="text" />
    <BaseInput v-model="event.description" label="Descirption" type="text" />
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

    <pre>{{ event }}</pre>

    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseRadioGroup from '@/components/BaseRadioGroup.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import { iEvent } from '@/types'
import { defineComponent } from 'vue'
import EventService from '@/services/EventService'
import { AxiosError, AxiosResponse } from 'axios'
import { v4 as uuidv4 } from 'uuid'
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
        'community',
        33,
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        extras: {
          catering: false,
          music: false,
        },
      } as iEvent,
      petsOptions: [
        { value: true, label: 'Yes' },
        { value: false, label: 'No' },
      ],
    }
  },
  // ATTN: via auto importing
  components: {
    BaseSelect,
    BaseInput,
    BaseCheckbox,
    // BaseRadio,
    BaseRadioGroup,
  },
  methods: {
    submitForm() {
      EventService.postEvent({ ...this.event, id: uuidv4() })
        .then((res: AxiosResponse) => console.log({ res }))
        .catch((err: AxiosError) => console.log({ err }))
    },
  },
})
</script>

<style>
.field {
  margin-bottom: 24px;
}

form {
  width: 500px;
  padding: 0 20px 20px;
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

pre {
  text-align: left;
}
</style>
