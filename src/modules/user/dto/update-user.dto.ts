import {
  IsString,
  MinLength,
  MaxLength,
  IsBoolean,
  IsOptional
} from 'class-validator';

export default class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'name must be a string' })
  @MinLength(1, { message: 'Minimum name length must be 1' })
  @MaxLength(15, { message: 'Maximum name length must be 15' })
  public name?: string;

  @IsOptional()
  @IsBoolean({ message: 'Field isPro must be a boolean' })
  public isPro?: boolean;

  @IsOptional()
  @MaxLength(256, { message: 'Too long for field previewImage' })
  public avatarPath?: string;
}
