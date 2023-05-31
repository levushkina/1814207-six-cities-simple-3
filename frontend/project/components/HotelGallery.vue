<template>
  <div class="property__gallery-container container">
    <div class="property__gallery">
      <hotel-gallery-item
        v-for="image in images"
        :key="image"
        :image="image"
      ></hotel-gallery-item>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: string[],
}>();
</script>
