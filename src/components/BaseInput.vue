<template>
  <label>{{ label }}</label>
  <input
    class="field"
    v-bind="$attrs"
    :placeholder="label"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      defautl: '',
    },
  },
})
</script>
