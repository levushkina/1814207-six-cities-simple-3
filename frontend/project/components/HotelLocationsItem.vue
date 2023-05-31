<template>
  <li class="locations__item">
    <a
      class="locations__item-link tabs__item"
      :class="{'tabs__item--active': city === currentCity}"
      @click.prevent="$emit('currentCityChange', city)"
      @keydown="$emit('current-city-change', city)"
    >
      <span>{{city}}</span>
    </a>
  </li>
</template>

<script setup lang="ts">

const props = defineProps<{
  city: string,
  currentCity: string,
}>();

defineEmits<{
  (e: 'current-city-change', city: string): void,
}>();
</script>
