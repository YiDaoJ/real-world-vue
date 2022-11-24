<template>
  <div>
    <input
      type="radio"
      class="radio-field"
      :checked="modelValue === value || defaultValue === value"
      v-bind="$attrs"
      @change="$emit('update:modelValue', value)"
      :id="id"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
      default: ''
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: {
      type: [String, Number, Boolean],
      required: true
    },
    defaultValue: {
      type: [String, Number, Boolean]
    }
  },
  setup() {
    const id = uuidv4()
    return { id }
  }
})
</script>

<style scoped>
div {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: baseline;
}

input {
  cursor: pointer;
}
</style>
