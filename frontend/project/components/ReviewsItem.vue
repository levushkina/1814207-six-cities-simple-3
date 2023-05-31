<template>
  <li class="reviews__item">
    <div class="reviews__user user">
      <div class="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          class="reviews__avatar user__avatar"
          :src="review.user.avatarPath"
          width="54"
          height="54"
          alt="Reviews avatar"
        >
      </div>
      <span class="reviews__user-name">
        {{ review.user.name }}
      </span>
    </div>
    <div class="reviews__info">
      <div class="reviews__rating rating">
        <div class="reviews__stars rating__stars">
          <hotel-rating :ratingValue="review.rating"></hotel-rating>
        </div>
      </div>
      <p class="reviews__text">
        {{ review.comment }}
      </p>
      <time
        class="reviews__time"
        :datetime="review.date.toString()"
      >
        {{ new Date(review.date).toLocaleDateString('en', {month: 'long', year: 'numeric'}) }}
      </time>
    </div>
  </li>
</template>
<script setup lang="ts">
import { Reviews } from '../models';
import HotelRating from './HotelRating.vue';

defineProps<{
  review: Reviews,
}>();
</script>
