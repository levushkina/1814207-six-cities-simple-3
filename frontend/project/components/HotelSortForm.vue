<template>
  <form class="places__sorting" action="#" method="get">
    <span class="places__sorting-caption">Sort by</span>
    <span
      class="places__sorting-type"
      tabindex="0"
      @click="toggleSortOptions"
      @keydown="toggleSortOptions"
    >
      {{currentSortType}}
      <svg class="places__sorting-arrow" width="7" height="4">
        <use xlink:href="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul
      class="places__options places__options--custom"
      :class="{'places__options--opened': sortOptionsIsOpen}"
    >
      <sort-option
        v-for="(value, name) in sortOption"
        :key="name"
        :name="name"
        :currentSortType="currentSortType"
        :value="value"
        @sortOptionChange="onSortOptionChange($event)"
      ></sort-option>
    </ul>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import SortOption from './SortOption.vue';
import { sortOption } from '../const/common';

defineProps<{
  currentSortType: string,
}>();

const emits = defineEmits<{
  (e: 'sortOptionChange', type: string): void,
}>();

const sortOptionsIsOpen = ref(false);
const toggleSortOptions = () => {
  sortOptionsIsOpen.value = !sortOptionsIsOpen.value;
};
const onSortOptionChange = (type: string) => {
  emits('sortOptionChange', type);
  toggleSortOptions();
};
</script>
