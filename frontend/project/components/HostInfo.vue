<template>
  <div class="property__host-user user">
    <div
      class="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper"
    >
      <img
        class="property__avatar user__avatar"
        :src="host.avatarPath"
        width="74"
        height="74"
        alt="Host avatar"
      >
    </div>
    <span class="property__user-name">
      {{host.name}}
    </span>
    <span
      v-if="host.isPro"
      class="property__user-status"
    >
      Pro
    </span>
  </div>
</template>
<script setup lang="ts">
import { HotelHost } from '@/models';

defineProps<{
  host: HotelHost,
}>();
</script>
