<template>
  <h4>Oops! There war an error:</h4>
  <p>{{ error }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    error: {
      type: String,
      required: true,
    },
  },
})
</script>
