import typegoose, {defaultClasses, getModelForClass, Ref} from '@typegoose/typegoose';
import { OfferType } from '../../types/offer-type.enum.js';
import { UserEntity } from '../user/user.entity.js';
import { Location } from '../../types/location.type.js';
import { City } from '../../types/city.type.js';

const { prop, modelOptions } = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({trim: true, required: true})
  public title!: string;

  @prop({trim: true, required: true})
  public description!: string;

  @prop({required: true})
  public date!: Date;

  @prop({required: true})
  public city!: City;

  @prop({default: ''})
  public previewImage!: string;

  @prop({required: true})
  public images!: string[];

  @prop()
  public isPremium!: boolean;

  @prop({default: 1})
  public rating!: number;

  @prop({
    type: () => String,
    enum: OfferType
  })
  public type!: OfferType;

  @prop()
  public bedrooms!: number;

  @prop()
  public guests!: number;

  @prop()
  public price!: number;

  @prop()
  public goods!: string[];

  @prop({
    ref: UserEntity,
    required: true
  })
  public host!: Ref<UserEntity>;

  @prop()
  public location!: Location;

  @prop({default: 0})
  public commentCount!: number;
}

export const OfferModel = getModelForClass(OfferEntity);
