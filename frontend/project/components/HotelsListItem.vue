<template>
  <article
    class="place-card"
    :class="wrapperName || PlaceCardClassName.DEFAULT"
    @mouseover="$emit('onHotelHover', hotel.id)"
    @focus="$emit('onHotelHover', hotel.id)"
  >
    <div
      v-if="hotel.isPremium"
      class="place-card__mark"
    >
      <span>Premium</span>
    </div>
     <div class="cities__image-wrapper place-card__image-wrapper">
      <NuxtLink :to="`${AppRoute.OFFER}/${hotel.id}`">
        <img
          :src='hotel.previewImage'
          class="place-card__image"
          width="260"
          height="200"
          alt="Place image"
        >
      </NuxtLink>
    </div>
   <div class="place-card__info">
      <div class="place-card__price-wrapper">
        <div class="place-card__price">
          <b class="place-card__price-value">&euro;{{hotel.price}}</b>
          <span class="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <bookmarks-button></bookmarks-button>
      </div>
      <div class="place-card__rating rating">
        <div class="place-card__stars rating__stars">
          <hotel-rating :rating-value="hotel.rating"></hotel-rating>
        </div>
      </div>
      <h2 class="place-card__name">
        <NuxtLink :to="`${AppRoute.OFFER}/${hotel.id}`">
          {{hotel.title}}
        </NuxtLink>
      </h2>
      <p class="place-card__type">{{hotel.type}}</p>
    </div>
     
  </article>
</template>

<script setup lang="ts">
import BookmarksButton from './BookmarksButton.vue';
import { Hotel } from '../models';
import HotelRating from './HotelRating.vue';
import { PlaceCardClassName } from '../const/common';
import { AppRoute } from '@/const/routes';

const props = defineProps<{
  hotel: Hotel,
  wrapperName?: string
}>();
  
</script>
