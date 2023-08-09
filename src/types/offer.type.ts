import { User } from './user.type.js';
import { OfferType } from './offer-type.enum.js';
import { Location } from './location.type.js';
import { City } from './city.type.js';
import { OfferGoods } from './offer-goods.enum.js';

export type Offer = {
  title: string,
  description: string,
  date: Date,
  city: City,
  previewImage: string,
  images: string[],
  isPremium: boolean,
  rating: number,
  type: OfferType,
  bedrooms: number,
  guests: number,
  price: number,
  goods: OfferGoods[],
  host: User,
  location: Location
}
