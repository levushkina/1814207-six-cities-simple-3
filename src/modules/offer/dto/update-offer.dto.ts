import { OfferType } from '../../../types/offer-type.enum.js';
import { OfferGoods } from '../../../types/offer-goods.enum.js';
import { City } from '../../../types/city.type.js';
import { Location } from '../../../types/location.type.js';
import OfferLocationDto from './offer-location.dto.js';
import OfferCityDto from './offer-city.dto.js';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
  IsString,
  IsBoolean,
  IsOptional
} from 'class-validator';
import { Type } from 'class-transformer';

export default class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, { message: 'Minimum title length must be 10' })
  @MaxLength(100, { message: 'Maximum title length must be 100' })
  public title?: string;

  @IsOptional()
  @MinLength(20, { message: 'Minimum description length must be 20' })
  @MaxLength(1024, { message: 'Maximum description length must be 1024' })
  public description?: string;

  @IsOptional()
  @IsDateString({}, { message: 'postDate must be valid ISO date' })
  public date?: Date;

  @IsOptional()
  @ValidateNested({ message: 'city must be valid City object' })
  @Type(() => OfferCityDto)
  public city?: City;

  @IsOptional()
  @MaxLength(256, { message: 'Too long for field previewImage' })
  public previewImage?: string;

  @IsOptional()
  @IsArray({ message: 'Field images must be an array' })
  @IsString({ each: true, message: 'Images field must be an array of string' })
  @MaxLength(256, { each: true, message: 'Too long for field Image' })
  public images?: string[];

  @IsOptional()
  @IsBoolean({ message: 'Field isPremium must be a boolean' })
  public isPremium?: boolean;

  @IsOptional()
  @IsInt({ message: 'Rating must be an integer' })
  @Min(1, { message: 'Minimum rating is 1' })
  @Max(5, { message: 'Maximum rating is 5' })
  public rating?: number;

  @IsOptional()
  @IsEnum(OfferType, { message: 'type must be Apartment or House or Room or Hotel' })
  public type?: OfferType;

  @IsOptional()
  @IsInt({ message: 'bedrooms must be an integer' })
  @Min(1, { message: 'Minimum bedrooms is 1' })
  @Max(8, { message: 'Maximum bedrooms is 8' })
  public bedrooms?: number;

  @IsOptional()
  @IsInt({ message: 'guests must be an integer' })
  @Min(1, { message: 'Minimum guests is 1' })
  @Max(10, { message: 'Maximum guests is 10' })
  public guests?: number;

  @IsOptional()
  @IsInt({ message: 'Price must be an integer' })
  @Min(100, { message: 'Minimum price is 100' })
  @Max(100000, { message: 'Maximum price is 100000' })
  public price?: number;

  @IsOptional()
  @IsArray({ message: 'Field goods must be an array' })
  @IsEnum(OfferGoods, { each: true, message: 'Goods item must be one of: Breakfast, Air conditioning, Laptop friendly workspace, Baby seat, Washer, Towels, Fridge' })
  public goods?: OfferGoods[];

  @IsOptional()
  @ValidateNested({ message: 'location must be valid Location object' })
  @Type(() => OfferLocationDto)
  public location?: Location;
}
