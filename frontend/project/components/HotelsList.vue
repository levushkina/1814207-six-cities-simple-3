<template>
  <div class="cities">
    <div class="cities__places-container container">
      <section class="cities__places places">
        <h2 class="visually-hidden">Places</h2>
        <b class="places__found">{{hotels?.length}} places to stay in {{currentCity}}</b>
        <hotel-sort-form
          :currentSortType="currentSortType"
          @sortOptionChange="$emit('sortOptionChange', $event)"
        ></hotel-sort-form>
        <div class="cities__places-list places__list tabs__content">
          <hotels-list-item
            v-for="hotel in hotels"
            :key="`hotel-${hotel.id}`"
            :hotel="hotel"
            @onHotelHover="setCurrentHotelId($event)"
          ></hotels-list-item>
        </div>
      </section>
      <div class="cities__right-section">
        <section class="cities__map map">
          <!-- <locations-map
            :hotels="hotels"
            :activeHotel="activeHotel"
          ></locations-map> -->
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Hotel } from '../models';
import { getHotelById } from '../utils/common';

const props = defineProps<{
  hotels: Hotel[],
  currentSortType: string,
  currentCity: string,
}>();

defineEmits<{
  (e: 'change-sort-option', city: string): void,
}>();

const currentHotelId = ref();

const setCurrentHotelId = (id: number) => {
  currentHotelId.value = id;
};
const activeHotel = computed(() => getHotelById(props.hotels as Hotel[], currentHotelId.value) || props.hotels[0]);

</script>
