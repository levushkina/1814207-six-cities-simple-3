import { Expose } from 'class-transformer';

export default class LoggedUserResponse {
  @Expose()
  public token!: string;

  @Expose()
  public email!: string;

  @Expose()
  public name!: string ;

  @Expose()
  public avatarPath?: string;

  @Expose()
  public isPro!: string;
}
