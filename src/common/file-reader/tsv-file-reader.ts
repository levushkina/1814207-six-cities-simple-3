import { readFileSync } from 'fs';
import { OfferType } from '../../types/offer-type.enum.js';
import { Offer } from '../../types/offer.type.js';
import { FileReaderInterface } from './file-reader.interface.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([title, description, date, city, previewImage, images, isPremium, rating, type, bedrooms, guests, price, goods, name, email, password, isPro, latitude, longitude ]) => ({
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
        goods: goods.split(','),
        host: {name, email, password, isPro: !!isPro},
        location: {latitude: Number(latitude), longitude: Number(longitude)}
      }));
  }
}
