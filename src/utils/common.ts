import * as jose from 'jose';
import crypto from 'crypto';
import { plainToInstance } from 'class-transformer';
import { ClassConstructor } from 'class-transformer/types/interfaces/class-constructor.type.js';
import { OfferType } from '../types/offer-type.enum.js';
import { Offer } from '../types/offer.type.js';
import { City } from '../types/city.type.js';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [title, description, date, city, previewImage, images, isPremium, rating, type, bedrooms, guests, price, goods, name, email, isPro, password, avatarPath, latitude, longitude ] = tokens;
  const cityData = <City>JSON.parse(city);
  return {
    title,
    description,
    date: new Date(date),
    city: {
      name: cityData.name,
      location: cityData.location
    },
    previewImage,
    images: images.split(';'),
    isPremium: !!isPremium,
    rating: Number(rating),
    type: OfferType[type as 'Apartment' | 'House' | 'Room' | 'Hotel'],
    bedrooms: Number(bedrooms),
    guests: Number(guests),
    price: Number(price),
    goods: goods.split(';'),
    host: {name, email, isPro: !!isPro, password, avatarPath},
    location: {latitude: Number(latitude), longitude: Number(longitude)}
  } as Offer;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';

export const createSHA256 = (line: string, salt: string): string => {
  const shaHasher = crypto.createHmac('sha256', salt);
  return shaHasher.update(line).digest('hex');
};

export const fillDTO = <T, V>(someDto: ClassConstructor<T>, plainObject: V) =>
  plainToInstance(someDto, plainObject, { excludeExtraneousValues: true });

export const createErrorObject = (message: string) => ({
  error: message,
});

export const createJWT = async (algoritm: string, jwtSecret: string, payload: object): Promise<string> =>
  new jose.SignJWT({...payload})
    .setProtectedHeader({ alg: algoritm})
    .setIssuedAt()
    .setExpirationTime('2d')
    .sign(crypto.createSecretKey(jwtSecret, 'utf-8'));
