<template>
  <div class="page--main">
    <loading-screen v-if="pending"></loading-screen>
    <main
      v-else
      class="page__main page__main--index"
    >
      <h1 class="visually-hidden">Cities</h1>
      <hotels-locations
        :currentCity="currentCity"
        @current-city-change="updateCurrentCity($event)"
      ></hotels-locations>
    
      <hotels-list
        v-if="hotels.length > 0"
        :hotels="hotels"
        :currentCity="currentCity"
        :currentSortType="currentSortType"
        @sortOptionChange="updateSortType($event)"
      ></hotels-list>
    </main>
  </div>
</template>
<script setup lang="ts">
import { BACKEND_URL, APIRoute } from '../const/routes';
import { useHotelsStore } from '@/stores/useHotelsStore';
import { DEFAULT_CITY, sortOption } from '../const/common';
import { Hotel } from '../models';
import { filterHotelsByCity, sortHotels } from '../utils/common';


const { pending, data } = await useFetch(`${BACKEND_URL}${APIRoute.OFFERS}`);

const currentSortType = ref(sortOption.DEFAULT);

const updateSortType = (type: string) => {
  currentSortType.value = type;
};

const hotels = computed(
  (): Hotel[] => sortHotels(
    currentSortType.value,
    filterHotelsByCity(currentCity.value, data.value as Hotel[]),
  ),
);

const store = useHotelsStore();
store.setHotelList(data.value as []);


const currentCity = ref(DEFAULT_CITY);

const updateCurrentCity = (city: string) => {
  currentCity.value = city;
};

</script>
