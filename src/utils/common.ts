import crypto from 'crypto';
import { OfferType } from '../types/offer-type.enum.js';
import { Offer } from '../types/offer.type.js';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [title, description, date, city, previewImage, images, isPremium, rating, type, bedrooms, guests, price, goods, name, email, isPro, password, avatarPath, latitude, longitude ] = tokens;
  return {
    title,
    description,
    date: new Date(date),
    city,
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
