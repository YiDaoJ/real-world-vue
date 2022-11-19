<template>
  <label v-if="label" :for="id">{{ label }}</label>
  <select
    :value="modelValue"
    class="field"
    v-bind="{
      ...$attrs,
      onChange: ($event) => $emit('update:modelValue', ($event.target as HTMLSelectElement).value),
    }"
    :id="id"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
import { CategoryType } from '@/types'
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
      // when a prop is declared to allow multiple types => https://vuejs.org/guide/components/props.html#boolean-casting
      // Qn: what if type: String || Number => type: StringConstructor;
      // Qn: conflict with "tupe types in TypeScript"? => https://fjolt.com/article/typescript-array-type#tuple-types-in-typescript
      default: '',
    },
    options: {
      type: Array as () => Array<CategoryType>,
      require: true,
    },
  },
  setup() {
    const id = uuidv4()
    return { id }
  },
})
</script>

<style>
select {
  width: 100%;
  height: 52px;
  padding: 0 24px 0 10px;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 8px 10px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select:focus {
  border-color: #39b982;
  outline: 0;
}
select:focus::ms-value {
  color: #000;
  background: #fff;
}
select::ms-expand {
  opacity: 0;
}
</style>
