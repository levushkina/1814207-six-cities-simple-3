import { IsLatitude, IsLongitude, IsDefined } from 'class-validator';

export default class OfferLocationDto {
  @IsDefined({ message: 'Must be valid latitude' })
  @IsLatitude({ message: 'Must be valid latitude' })
  public latitude!: string;

  @IsDefined({ message: 'Must be valid longitude' })
  @IsLongitude({ message: 'Must be valid longitude' })
  public longitude!: string;
}
