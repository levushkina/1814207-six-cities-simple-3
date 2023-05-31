<template>
  <input
    class="form__rating-input visually-hidden"
    name="rating"
    :value="value"
    :id="`${value}-stars`"
    :checked="rating === value"
    type="radio"
    @change="$emit('on-rating-change', value)"
  >
  <label
    :for="`${value}-stars`"
    class="reviews__rating-label form__rating-label"
    title="perfect"
  >
    <svg class="form__star-image" width="37" height="33">
      <use xlink:href="#icon-star"></use>
    </svg>
  </label>
</template>
<script setup lang="ts">
import { Reviews } from '@/models';

defineProps<{
  value: number,
  rating: number,
}>();

defineEmits<{
  (e: 'on-rating-change', value: number): void,
}>();
</script>
