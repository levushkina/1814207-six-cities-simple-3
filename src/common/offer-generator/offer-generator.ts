import dayjs from 'dayjs';
import { MockData } from '../../types/mock-data.type.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { OfferGoods } from '../../types/offer-goods.enum.js';
import { PriceRange } from '../../types/price-range.enum.js';
import { GuestsRange } from '../../types/guests-range.enum.js';
import { RoomsRange } from '../../types/rooms-range.enum.js';
import { PasswordRange } from '../../types/password-range.enum.js';
import { RatingRange } from '../../types/rating-range.enum.js';
import { WeekDays } from '../../types/week-days.enum.js';
import { City } from '../../types/city.type.js';
import { generateRandomValue, getRandomItem, getRandomItems, getRandomBoolean } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const city = getRandomItem<City>(this.mockData.cities);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const images = getRandomItem<string>(this.mockData.images);
    const type = getRandomItem(Object.values(OfferType));
    const goods = getRandomItems(Object.values(OfferGoods)).join(';');
    const location = getRandomItem<Array<number>>(this.mockData.locations);
    const host = getRandomItem<string>(this.mockData.users);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatarPath = getRandomItem<string>(this.mockData.avatars);
    const isPremium = getRandomBoolean();
    const isPro = getRandomBoolean();
    const bedrooms = generateRandomValue(RoomsRange.Min, RoomsRange.Max, 0);
    const guests = generateRandomValue(GuestsRange.Min, GuestsRange.Max, 0);
    const rating = generateRandomValue(RatingRange.Min, RatingRange.Max, 1);
    const price = generateRandomValue(PriceRange.Min, PriceRange.Max).toString();
    const password = generateRandomValue(PasswordRange.Min, PasswordRange.Max).toString();
    const createdDate = dayjs().subtract(generateRandomValue(WeekDays.First, WeekDays.Last), 'day').toISOString();

    const [latitude, longitude] = location;
    return [
      title,
      description, createdDate,
      JSON.stringify(city),
      previewImage,
      images,
      isPremium,
      rating,
      type,
      bedrooms,
      guests,
      price,
      goods,
      host,
      email,
      isPro,
      password,
      latitude,
      longitude,
      avatarPath,
    ].join('\t');
  }
}
