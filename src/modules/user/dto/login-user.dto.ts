import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';
import { UserPaswordRange } from '../user.constant.js';

export default class LoginUserDto {
  @IsEmail({}, { message: 'email must be valid address' })
  public email!: string;

  @IsString({ message: 'password is required' })
  @MinLength(UserPaswordRange.Min, { message: `Minimum password length must be ${ UserPaswordRange.Min }` })
  @MaxLength(UserPaswordRange.Max, { message: `Maximum password length must be ${ UserPaswordRange.Max }` })
  public password!: string;
}
