import {
  IsMongoId,
  IsString,
  Length,
  IsInt,
  Min,
  Max
} from 'class-validator';
import { RatingRange } from '../../../types/rating-range.enum.js';
import { CommentRange } from '../coment.consts.js';

export default class CreateCommentDto {
  @IsString({ message: 'Comment is required' })
  @Length(5, 1024, { message: `Comment min length is ${ CommentRange.Min }, max is ${ CommentRange.Max }` })
  public comment!: string;

  @IsMongoId({ message: 'OfferId field must be a valid id' })
  public offerId!: string;

  public userId!: string;

  @IsInt({ message: 'Rating must be an integer' })
  @Min(1, { message: `Minimum rating is ${ RatingRange.Min }` })
  @Max(5, { message: `Maximum rating is ${ RatingRange.Max }` })
  public rating!: number;
}
