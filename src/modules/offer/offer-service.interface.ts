import { DocumentType } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import CreateOfferDto from './dto/create-offer.dto.js';
import UpdateOfferDto from './dto/update-offer.dto.js';
import { DocumentExistsInterface } from '../../types/document-exists.interface.js';
import { CheckOwnerInterface } from '../../types/check-owner.interface.js';

export interface OfferServiceInterface extends DocumentExistsInterface, CheckOwnerInterface {
  create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
  find(count?: number): Promise<DocumentType<OfferEntity>[]>;
  findById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null>;
  deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  incCommentCount(offerId: string, rating: number): Promise<DocumentType<OfferEntity> | null>;
  exists(documentId: string): Promise<boolean>;
  findNearbyByOfferId(offerId: string, count?: number): Promise<DocumentType<OfferEntity>[]>;
  //findNearbyByOfferId(offerId: string): Promise<DocumentType<OfferEntity[]> | null>;
}
