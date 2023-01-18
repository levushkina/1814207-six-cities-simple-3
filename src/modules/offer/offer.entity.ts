import typegoose, {defaultClasses, getModelForClass, Ref} from '@typegoose/typegoose';
import { OfferType } from '../../types/offer-type.enum.js';
import { UserEntity } from '../user/user.entity.js';
import { Location } from '../../types/location.type.js';

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

  @prop({trim: true, required: true})
  public city!: string;

  @prop({trim: true, required: true})
  public previewImage!: string;

  @prop({required: true})
  public images!: string[];

  @prop()
  public isPremium!: boolean;

  @prop()
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
}

export const OfferModel = getModelForClass(OfferEntity);
