<template>
  <div
    class="login__input-wrapper form__input-wrapper"
  >
    <label class="visually-hidden">
      {{ labelText }}
    </label>
    <input 
      class="login__input form__input"
      :type="type || 'text'"
      :value="modelValue"
      :pattern="pattern"
      :required="required"
      :placeholder="placeholder"
      @input="emits('update:modelValue', ($event.target as HTMLInputElement)?.value)"
    />
  </div>
</template>
<script setup lang="ts">

defineProps<{
  labelText: string,
  modelValue: string | number,
  type?: string,
  pattern?: string,
  required?: boolean,
  placeholder: string
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

</script>

