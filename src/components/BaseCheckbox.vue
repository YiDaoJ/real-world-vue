<template>
  <div>
    <input
      type="checkbox"
      class="checkbox-field"
      :checked="modelValue"
      :id="id"
      v-bind="{...$attrs, onChange: ($event) => $emit('update:modelValue', ($event.target as HTMLInputElement).checked)}"
    />
    <label v-if="label" class="checkbox-label" :for="id">{{ label }}</label>
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
      type: Boolean,
      default: false
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
