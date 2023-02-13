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
  Min,
  ValidateNested,
  IsString,
  IsBoolean,
  IsOptional,
  ArrayMinSize,
  ArrayMaxSize,
  Length
} from 'class-validator';
import { Type } from 'class-transformer';
import { TitleRange, DescriptionRange, ImageRange } from '../offer.constant.js';
import { RoomsRange } from '../../../types/rooms-range.enum.js';
import { GuestsRange } from '../../../types/guests-range.enum.js';
import { PriceRange } from '../../../types/price-range.enum.js';

export default class UpdateOfferDto {
  @IsOptional()
  @Length(
    TitleRange.Min, TitleRange.Max,
    { message: `Title min length is ${ TitleRange.Min }, max is ${ TitleRange.Max }` }
  )
  public title?: string;

  @IsOptional()
  @Length(
    DescriptionRange.Min, DescriptionRange.Max,
    { message: `Title min length is ${ DescriptionRange.Min }, max is ${ DescriptionRange.Max }` }
  )
  public description?: string;

  @IsOptional()
  @IsDateString({}, { message: 'postDate must be valid ISO date' })
  public date?: Date;

  @IsOptional()
  @ValidateNested({ message: 'City must contain name and location object' })
  @Type(() => OfferCityDto)
  public city?: City;

  @IsOptional()
  public previewImage?: string;

  @IsOptional()
  @IsArray({ message: 'Field images must be an array' })
  @ArrayMinSize(ImageRange.Min, { message: `Images min count must be ${ ImageRange.Min }` })
  @ArrayMaxSize(ImageRange.Min, { message: `Images count must be ${ ImageRange.Max }` })
  @IsString({ each: true, message: 'Images field must be an array of string' })
  public images?: string[];

  @IsOptional()
  @IsBoolean({ message: 'Field isPremium must be a boolean' })
  public isPremium?: boolean;

  @IsOptional()
  @IsEnum(OfferType, { message: 'type must be Apartment or House or Room or Hotel' })
  public type?: OfferType;

  @IsOptional()
  @IsInt({ message: 'bedrooms must be an integer' })
  @Min(RoomsRange.Min, { message: `Minimum bedrooms is ${ RoomsRange.Min }` })
  @Max(RoomsRange.Max, { message: `Maximum bedrooms is ${ RoomsRange.Max }` })
  public bedrooms?: number;

  @IsOptional()
  @IsInt({ message: 'guests must be an integer' })
  @Min(GuestsRange.Min, { message: `Minimum guests is ${ GuestsRange.Min }` })
  @Max(GuestsRange.Max, { message: `Maximum guests is ${ GuestsRange.Max }` })
  public guests?: number;

  @IsOptional()
  @IsInt({ message: 'Price must be an integer' })
  @Min(PriceRange.Min, { message: `Minimum price is ${ PriceRange.Min }` })
  @Max(PriceRange.Max, { message: `Maximum price is ${ PriceRange.Max }` })
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
