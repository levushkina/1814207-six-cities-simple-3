<template>
  <div class="property__image-wrapper">
    <img class="property__image" :src="image" alt="Photo studio">
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string,
}>();
</script>
