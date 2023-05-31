<template>
  <main class="page__main page__main--property">
    <loading-screen v-if="pending"></loading-screen>
    <section 
      v-if="hotel" 
      class="property"
    >
      <hotel-gallery :images="images"></hotel-gallery>
      <div class="property__container container">
        <div class="property__wrapper">
          <div v-if="hotel.isPremium" class="property__mark">
            <span>Premium</span>
          </div>
          <div class="property__name-wrapper">
            <h1 class="property__name">
              {{hotel.title}}
            </h1>
            <button class="property__bookmark-button button" type="button">
              <svg class="property__bookmark-icon" width="31" height="33">
                <use xlink:href="#icon-bookmark"></use>
              </svg>
              <span class="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div class="property__rating rating">
            <div class="property__stars rating__stars">
              <hotel-rating :rating-value="hotel.rating"></hotel-rating>
            </div>
            <span class="property__rating-value rating__value">{{hotel.rating}}</span>
          </div>
          <ul class="property__features">
            <li class="property__feature property__feature--entire">
              {{hotel.type}}
            </li>
            <li class="property__feature property__feature--bedrooms">
              {{hotel.bedrooms}} Bedrooms
            </li>
            <li class="property__feature property__feature--adults">
              Max {{hotel.maxAdults}} adults
            </li>
          </ul>
          <div class="property__price">
            <b class="property__price-value">&euro;{{hotel.price}}</b>
            <span class="property__price-text">&nbsp;night</span>
          </div>
          <div class="property__inside">
            <h2 class="property__inside-title">What&apos;s inside</h2>
            <ul class="property__inside-list">
              <property-item
                v-for="property in hotel.goods"
                :key="property"
                :property="property"
              ></property-item>
            </ul>
          </div>
          <div class="property__host">
            <h2 class="property__host-title">Meet the host</h2>
            <host-info :host="hotel.user"></host-info>
            <div class="property__description">
              <p class="property__text">
                {{hotel.description}}
              </p>
            </div>
          </div>
          <section class="property__reviews reviews">
            <hotel-reviews
              v-if="hotelReviewsData?.length"
              :reviews="hotelReviewsData"
            ></hotel-reviews>
            <review-form :id="(route.params.id as string)"></review-form>
          </section>
        </div>
      </div>
      <!-- <section  v-if="nearbyHotels && nearbyHotels.length" class="property__map map">
        <locations-map
          :hotels="nearbyHotels"
          :activeHotel="activeHotel"
        ></locations-map>
      </section> -->
    </section>
    <div class="container">
      <nearby-hotels
        v-if="nearbyHotelsData?.length"
        :nearbyHotels="nearbyHotelsData"
        @onHotelHover="setCurrentHotelId($event)"
      ></nearby-hotels>
    </div>
  </main>
</template>
<script setup lang="ts">
import { BACKEND_URL, APIRoute } from '@/const/routes';
import { Hotel, Reviews } from '@/models';

const route = useRoute();
const { pending, data } = await useFetch(`${BACKEND_URL}${APIRoute.OFFERS}/${route.params.id}`);
const hotel = computed(() => data.value as Hotel);
const images = computed(() => hotel.value.images.slice(0, 6));

const nearbyDataFetch = await useFetch(`${BACKEND_URL}${APIRoute.OFFERS}/${route.params.id}${APIRoute.NEARBY}`);
const nearbyHotelsData = computed(() => nearbyDataFetch.data.value as Hotel[]);

const hotelReviewsDataFetch = await useFetch(`${BACKEND_URL}${APIRoute.OFFERS}/${route.params.id}${APIRoute.REVIEWS}`);
const hotelReviewsData = computed(() => hotelReviewsDataFetch.data.value as Reviews[]);



const setCurrentHotelId = (id: number) => {
  //currentHotelId.value = id;
};

</script>
