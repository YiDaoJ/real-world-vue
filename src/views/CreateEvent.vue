<template>
  <h2>create event forms</h2>
  <form>
    <BaseInput v-model="event.title" label="Title" type="text" />
    <BaseInput v-model="event.description" label="Descirption" type="text" />
    <BaseInput v-model="event.location" label="Location" type="text" />

    <BaseSelect
      label="Select a category"
      :options="categories"
      v-model="event.category"
    />

    <h3>Extras</h3>
    <BaseCheckbox
      v-model="event.extras.catering"
      label="Catering"
      type="checkbox"
    />

    <BaseCheckbox v-model="event.extras.music" label="Music" type="checkbox" />

    <pre>{{ event }}</pre>
  </form>
</template>

<script lang="ts">
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import { iEvent } from '@/types'
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
    }
  },
  // ATTN: via auto importing
  components: { BaseSelect, BaseInput, BaseCheckbox },
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