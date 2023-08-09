import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  IsBoolean
} from 'class-validator';
import { UserNameRange, UserPaswordRange } from '../user.constant.js';

export default class CreateUserDto {
  @IsEmail({}, { message: 'email must be valid address' })
  public email!: string ;

  @IsString({ message: 'name must be a string' })
  @MinLength(UserNameRange.Min, { message: `Minimum name length must be ${ UserNameRange.Min }` })
  @MaxLength(UserNameRange.Max, { message: `Maximum name length must be ${ UserNameRange.Max }` })
  public name!: string;

  @IsBoolean({ message: 'Field isPro must be a boolean' })
  public isPro!: boolean;

  @IsString({ message: 'password is required' })
  @MinLength(UserPaswordRange.Min, { message: `Minimum password length must be ${ UserPaswordRange.Min }` })
  @MaxLength(UserPaswordRange.Max, { message: `Maximum password length must be ${ UserPaswordRange.Max }` })
  public password!: string;
}
