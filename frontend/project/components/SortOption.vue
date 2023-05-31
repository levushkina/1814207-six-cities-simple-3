<template>
  <li
    class="places__option places__option--active"
    tabindex="0"
    @click="$emit('sortOptionChange', value)"
    @keydown="$emit('sortOptionChange', value)"
  >
    {{value}}
  </li>
</template>
<script setup lang="ts">

defineProps<{
  name: string,
  value: string,
  currentSortType: string,
}>();

defineEmits<{
  (e: 'sortOptionChange', type: string): void,
}>();

</script>
