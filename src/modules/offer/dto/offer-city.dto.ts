import OfferLocationDto from './offer-location.dto.js';
import { CityName } from '../../../types/city-name.enum.js';
import { Location } from '../../../types/location.type.js';
import { Type } from 'class-transformer';
import { IsEnum, ValidateNested, IsNotEmpty } from 'class-validator';

export default class OfferCityDto {
  @IsEnum(CityName, { message: 'type must be Apartment or Paris, or Cologne, or Brussels, or Hamburg, or Dusseldorf, or Amsterdam' })
  public name!: string;

  @ValidateNested()
  @IsNotEmpty({ message: 'Must be location object with latitude & longitude' })
  @Type(() => OfferLocationDto)
  public location!: Location;
}
