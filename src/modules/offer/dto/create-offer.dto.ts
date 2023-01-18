import { OfferType } from '../../../types/offer-type.enum.js';

export default class CreateOfferDto {
  public title!: string;
  public description!: string;
  public date!: Date;
  public city!: string;
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
  public location!: {
    latitude: number,
    longitude: number
  };
}
