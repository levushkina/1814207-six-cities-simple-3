<template>
   <span :style="{ width: rating }"></span>
    <span class="visually-hidden">Rating</span>
</template>

<script setup lang="ts">
import { convertRatingToPercent } from '../utils/common';

const props = defineProps<{
  ratingValue: number,
}>();

const rating = computed(() => props.ratingValue ? convertRatingToPercent(props.ratingValue) : 0);
</script>
