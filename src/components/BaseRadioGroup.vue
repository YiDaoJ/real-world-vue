<template>
  <div class="radio-group">
    <h3 v-if="title" class="radio-group__title">{{ title }}</h3>
    <BaseRadio
      v-for="option in options"
      :key="option.label"
      :value="option.value"
      :label="option.label"
      :name="name"
      :model-value="modelValue || defaultValue"
      :default-value="defaultValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseRadio from './BaseRadio.vue'
import { RadioOptionType } from '../types'

export default defineComponent({
  props: {
    options: {
      type: Array as () => Array<RadioOptionType>,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    modelValue: {
      type: [String, Number, Boolean],
      required: true
    }
  },
  components: { BaseRadio },
  computed: {
    defaultValue() {
      return this.options[0].value || ''
    }
  }
})
</script>

<style scoped>
.radio-group {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
}

.title {
  font-size: 1.5rem;
  line-height: 150%;
  font-weight: 400;
}
</style>

<!--
  TODO:
  Vue warn]: Invalid prop: type check failed for prop "modelValue". Expected String | Number | Boolean, got Undefined
  at <BaseRadioGroup modelValue=undefined onUpdate:modelValue=fn options= (2)[{…}, {…}]  ... >
  at <CreateEvent onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< undefined > >
  at <RouterView>
  at <App>
  => add default value
 -->
