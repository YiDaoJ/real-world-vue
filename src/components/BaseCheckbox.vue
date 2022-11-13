<template>
  <div>
    <input
      class="checkbox-field"
      :checked="modelValue"
      v-bind="{...$attrs, onChange: ($event) => $emit('update:modelValue', ($event.target as HTMLInputElement).checked)}"
    />
    <label v-if="label" class="checkbox-label">{{ label }}</label>
  </div>
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
      type: Boolean,
      default: false,
    },
  },
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
