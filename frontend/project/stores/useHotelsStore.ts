import { defineStore } from 'pinia';
import { BACKEND_URL, APIRoute } from '../const/routes';

export const useHotelsStore = defineStore('hotelStore', {
  state: () => ({
    hotels: [] as any,
    hotelsIsLoading: false,
  }),
  actions: {
    setHotelList(hotels: []) {
      this.hotels = hotels;
    }
  }
});