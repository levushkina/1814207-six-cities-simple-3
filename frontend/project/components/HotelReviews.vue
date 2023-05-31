<template>
  <h2 class="reviews__title">
    Reviews &middot; <span class="reviews__amount">{{ reviews.length }}</span>
  </h2>
    <ul class="reviews__list">
      <reviews-item
        v-for="review in reviews"
        :key="`review${review.id}`"
        :review="review"
      ></reviews-item>
    </ul>
</template>
<script setup lang="ts">
import { Reviews } from '../models';

defineProps<{
  reviews: Reviews[],
}>();
</script>
