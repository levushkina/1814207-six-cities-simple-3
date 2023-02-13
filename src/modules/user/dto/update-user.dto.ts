import {
  IsString,
  MinLength,
  MaxLength,
  IsBoolean,
  IsOptional
} from 'class-validator';
import { UserNameRange } from '../user.constant.js';

export default class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'name must be a string' })
  @MinLength(UserNameRange.Min, { message: `Minimum name length must be ${ UserNameRange.Min }` })
  @MaxLength(UserNameRange.Max, { message: `Maximum name length must be ${ UserNameRange.Max }` })
  public name?: string;

  @IsOptional()
  @IsBoolean({ message: 'Field isPro must be a boolean' })
  public isPro?: boolean;

  @IsOptional()
  public avatarPath?: string;
}
