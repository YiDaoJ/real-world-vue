<template>
  <label :for="id">{{ label }}</label>
  <input
    class="field"
    v-bind="$attrs"
    :placeholder="label"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    :id="id"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { v4 as uuidv4 } from 'uuid'

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
  setup() {
    const id = uuidv4()
    return { id }
  },
})
</script>

<!--
  TODO:
  - add error message
  - add accessibility for error message and input field
 -->
