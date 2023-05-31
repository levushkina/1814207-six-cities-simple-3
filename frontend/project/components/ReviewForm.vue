<template>
 <form class="reviews__form form" action="#" method="post">
    <label class="reviews__label form__label" for="review">Your review</label>
    <div class="reviews__rating-form form__rating">
      <FormRatingInput
        v-for="item in [5, 4, 3, 2, 1]"
        :key="`rating-input-${item}`"
        :value="item"
        :rating="formData.rating"
        @on-rating-change="formData.rating = $event"
      />
    </div>
    <textarea
      class="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      v-model="formData.comment"
    ></textarea>
    <FormError
      v-if="errorMessage"
      :errorText="errorMessage"
    />
    <div class="reviews__button-wrapper">
      <p class="reviews__help">
        To submit review please make sure to set
        <span class="reviews__star">rating</span>
        and describe your stay with at least
        <b class="reviews__text-amount">50 characters</b>.
      </p>
      <button
        class="reviews__submit form__submit button"
        type="submit"
        :disabled="!formData.comment || !formData.rating"
        @click.prevent="handleSubmit"
      >
        Submit
      </button>
    </div>
  </form>
</template>
<script setup lang="ts">
import { BACKEND_URL, APIRoute } from '@/const/routes';

const props = defineProps<{
  id: string,
}>();


const formData = reactive({
  comment: '',
  rating: 0,
  offerId: props.id
});

const errorMessage = ref('');

const handleSubmit = async () => {
  const { data, error } = await useFetch(`${BACKEND_URL}${APIRoute.REVIEWS}`, {
    method: 'POST',
    body: formData
  });

  if (error.value) {
    errorMessage.value = error.value.data.error;
    return;
  }
  formData.comment = '';
  formData.rating = 0;
  errorMessage.value = '';
}
</script>
