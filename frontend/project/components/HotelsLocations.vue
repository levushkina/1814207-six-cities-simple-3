<template>
  <div class="tabs">
    <section class="locations container">
      <ul class="locations__list tabs__list">
        <hotel-locations-item
          v-for="city in CITIES"
          :key="city"
          :city="city"
          :currentCity="currentCity"
          @currentCityChange="$emit('currentCityChange', $event)"
        ></hotel-locations-item>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { CITIES } from '../const/common';

const props = defineProps<{
  currentCity: string,
}>();

defineEmits<{
  (e: 'current-city-change', city: string): void,
}>();

</script>
