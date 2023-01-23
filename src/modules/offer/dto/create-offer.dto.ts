import { OfferType } from '../../../types/offer-type.enum.js';
import { City } from '../../../types/city.type.js';
import { Location } from '../../../types/location.type.js';

export default class CreateOfferDto {
  public title!: string;
  public description!: string;
  public date!: Date;
  public city!: City;
  public previewImage!: string;
  public images!: string[];
  public isPremium!: boolean;
  public rating!: number;
  public type!: OfferType;
  public bedrooms!: number;
  public guests!: number;
  public price!: number;
  public goods!: string[];
  public host!: string;
  public location!: Location;
}
