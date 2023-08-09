import { inject, injectable } from 'inversify';
import { OfferServiceInterface } from './offer-service.interface.js';
import CreateOfferDto from './dto/create-offer.dto.js';
import UpdateOfferDto from './dto/update-offer.dto.js';
import { DocumentType, types } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import { Component } from '../../types/component.types.js';
import { SortType } from '../../types/sort-type.enum.js';
import { LoggerInterface } from '../../common/logger/logger.interface.js';
import { DEFAULT_OFFER_COUNT, DEFAULT_NEARBY_OFFER_COUNT } from './offer.constant.js';

@injectable()
export default class OfferService implements OfferServiceInterface {
  constructor(
    @inject(Component.LoggerInterface) private readonly logger: LoggerInterface,
    @inject(Component.OfferModel) private readonly offerModel: types.ModelType<OfferEntity>
  ) {}

  public async create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>> {
    const result = await this.offerModel.create(dto);
    this.logger.info(`New offer created: ${ dto.title }`);

    return result;
  }

  public async find(count?: number): Promise<DocumentType<OfferEntity>[]> {
    const limit = count ?? DEFAULT_OFFER_COUNT;
    return this.offerModel
      .find({}, {}, { limit })
      .sort({ createdAt: SortType.Down })
      .populate(['host'])
      .exec();
  }

  public async findById(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findById(offerId)
      .populate(['host'])
      .exec();
  }

  public async updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(offerId, dto, { new: true })
      .populate(['host'])
      .exec();
  }

  public async deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndDelete(offerId)
      .exec();
  }

  public async incCommentCount(offerId: string, rating: number): Promise<DocumentType<OfferEntity> | null> {
    const offer = await this.offerModel
      .findById(offerId).exec();

    if (!offer) { return null; }
    const totalRating = (offer.rating + rating) / (offer.commentCount + 1);

    return this.offerModel
      .findByIdAndUpdate(offerId, { '$inc': {
        commentCount: 1,
      },
      '$set': {
        'rating': Number(totalRating.toFixed(1))
      }}).exec();
  }

  public async exists(documentId: string): Promise<boolean> {
    return (await this.offerModel
      .exists({_id: documentId})) !== null;
  }

  public async isOwner(userId: string, documentId: string): Promise<boolean> {
    const offer = await this.offerModel
      .findById(documentId)
      .populate(['host'])
      .exec();
    return offer?.host?._id.toString() === userId;
  }

  public async findNearbyByOfferId(offerId: string, count?: number): Promise<DocumentType<OfferEntity>[]> {
    const limit = count ?? DEFAULT_NEARBY_OFFER_COUNT;
    const offer = await this.offerModel.findById(offerId).exec();
    const cityName = offer?.city.name;

    if (!offer) { return []; }
    return this.offerModel
      .find({'city.name': cityName}, {}, { limit })
      .populate(['host'])
      .exec();
  }
}
