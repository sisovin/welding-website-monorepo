import { IsString, IsEmail, Length } from 'class-validator';

export class ContactFormDto {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(1, 500)
  message: string;
}
