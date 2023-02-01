import { Expose } from 'class-transformer';
//import { City } from '../../../types/city.type.js';

export default class OfferResponse {
  @Expose()
  public title!: string ;

  @Expose()
  public date!: string ;

  @Expose()
  public city?: string;

  @Expose()
  public previewImage!: string;

  @Expose()
  public isPremium!: boolean;

  @Expose()
  public rating!: number;

  @Expose()
  public type!: string;

  @Expose()
  public price!: number;

  @Expose()
  public commentsCount!: number;
}
