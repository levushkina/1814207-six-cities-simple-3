import { Expose, Type } from 'class-transformer';
import { City } from '../../../types/city.type.js';
import { Location } from '../../../types/location.type.js';
import UserResponse from '../../user/response/user.response.js';

export default class OfferFullResponse {
  @Expose()
  public id!: string;

  @Expose()
  public title!: string;

  @Expose()
  public date!: string;

  @Expose()
  public city?: City;

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
  public commentCount!: number;

  @Expose()
  public description!: string;

  @Expose()
  public images!: string[];

  @Expose()
  public bedrooms!: number;

  @Expose()
  public guests!: number;

  @Expose()
  public goods!: string[];

  @Expose({ name: 'host'})
  @Type(() => UserResponse)
  public user!: UserResponse;

  @Expose()
  public location!: Location;
}
