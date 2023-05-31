<template>
  <div className="form-error">
    {{ errorText }}
  </div>
</template>
<script setup lang="ts">

defineProps<{
  errorText: string,
}>();
</script>