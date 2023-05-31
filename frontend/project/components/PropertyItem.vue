<template>
  <li class="property__inside-item">
    {{ property }}
  </li>
</template>
<script setup lang="ts">
defineProps<{
  property: string,
}>();
</script>
