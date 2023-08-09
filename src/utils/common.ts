import * as jose from 'jose';
import crypto from 'crypto';
import { plainToInstance, ClassConstructor } from 'class-transformer';
import { ValidationError } from 'class-validator';
import { OfferType } from '../types/offer-type.enum.js';
import { Offer } from '../types/offer.type.js';
import { City } from '../types/city.type.js';
import { ValidationErrorField } from '../types/validation-error-field.type.js';
import { ServiceError } from '../types/service-error.enum.js';
import { OfferGoods } from '../types/offer-goods.enum.js';
import { UnknownObject } from '../types/unknown-object.type.js';
import { DEFAULT_STATIC_IMAGES } from '../app/application.constant.js';


export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [title, description, date, city, previewImage, images, isPremium, rating, type, bedrooms, guests, price, goods, name, email, isPro, password, avatarPath, latitude, longitude] = tokens;
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
    goods: goods.split(';') as OfferGoods[],
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

export const createErrorObject = (serviceError: ServiceError, message: string, details: ValidationErrorField[] = []) => ({
  errorType: serviceError,
  message,
  details: [...details]
});

export const createJWT = async (algoritm: string, jwtSecret: string, payload: object): Promise<string> =>
  new jose.SignJWT({ ...payload })
    .setProtectedHeader({ alg: algoritm})
    .setIssuedAt()
    .setExpirationTime('2d')
    .sign(crypto.createSecretKey(jwtSecret, 'utf-8'));

export const transformErrors = (errors: ValidationError[]): ValidationErrorField[] =>
  errors.map(({property, value, constraints}) => ({
    property,
    value,
    messages: constraints ? Object.values(constraints) : []
  }));

export const getFullServerPath = (host: string, port: number) => `http://${ host }:${ port }`;

const isObject = (value: unknown) => typeof value === 'object' && value !== null;

export const transformProperty = (
  property: string,
  someObject: UnknownObject,
  transformFn: (object: UnknownObject) => void
) => {
  Object.keys(someObject)
    .forEach((key) => {
      if (key === property) {
        transformFn(someObject);
      } else if (isObject(someObject[key])) {
        transformProperty(property, someObject[key] as UnknownObject, transformFn);
      }
    });
};

export const transformObject = (properties: string[], staticPath: string, uploadPath: string, data:UnknownObject) => {
  properties
    .forEach((property) => transformProperty(property, data, (target: UnknownObject) => {
      const rootPath = DEFAULT_STATIC_IMAGES.includes(target[property] as string) ? staticPath : uploadPath;
      if (Array.isArray(target[property])) {
        target[property] = (target[property] as string[]).map((item: string) => `${ rootPath }/${ item }`);
        return;
      }
      target[property] = `${ rootPath }/${ target[property] }`;
    }));
};
