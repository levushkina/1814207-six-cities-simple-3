<template>
<section class="near-places places">
  <h2 class="near-places__title">Other places in the neighbourhood</h2>
  <div class="near-places__list places__list">
    <hotels-list-item
      v-for="hotel in nearbyHotels"
      :key="`nearby-${hotel.id}`"
      :hotel="hotel"
      :wrapperName="wrapperName"
      @onHotelHover="$emit('on-hotel-hover', $event)"
    ></hotels-list-item>
  </div>
</section>
</template>
<script setup lang="ts">
import { Hotel } from '@/models';
import { PlaceCardClassName } from '@/const/common';

defineProps<{
  nearbyHotels: Hotel[],
}>();

defineEmits<{
  (e: 'on-hotel-hover', id: string): void,
}>();

  const wrapperName = PlaceCardClassName.NEARBY;
</script>
