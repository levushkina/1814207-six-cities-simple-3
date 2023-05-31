<template>
  <yandex-map :coords="[54, 39]" class="map">
    <ymap-marker markerId="123" marker-type="placemark" hint-content="element.hint" :coords="[54, 39]"></ymap-marker>
  </yandex-map>
  <!-- {{ activeItem }} -->
  <!-- <l-map
    :useGlobalLeaflet="false"
    :zoom="activeItem.city?.location?.zoom || 20"
    :center="[activeItem.city.location.latitude, activeItem.city.location.longitude]"
  >
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ></l-tile-layer>
    <l-control-layers />
    <l-marker
      v-for="hotel in hotels"
      :key="hotel.id"
      :lat-lng="[hotel.city.location.latitude, hotel.city.location.longitude]"
    >
      <l-icon :icon-url="hotel.id === activeItem.id ? URL_MARKER_CURRENT : URL_MARKER_DEFAULT" />
    </l-marker>
  </l-map> -->
</template>

<script setup lang="ts">
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../const/common';
import { Hotel } from '../models';

const props = defineProps<{
  hotels: Hotel[],
  activeHotel: Hotel
}>();

const activeItem = computed(() => props.activeHotel || props.hotels[0]);
const zoom = ref(10)
</script>
