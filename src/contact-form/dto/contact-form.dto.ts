import { IsString, IsEmail, Length } from 'class-validator';
import { ContactMessageDto } from './contact-message.dto';

export class ContactFormDto {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(1, 500)
  message: string;

  toContactMessage(): ContactMessageDto {
    const contactMessage = new ContactMessageDto();
    contactMessage.name = this.name;
    contactMessage.email = this.email;
    contactMessage.message = this.message;
    contactMessage.createdAt = new Date();
    contactMessage.isSpam = false;
    return contactMessage;
  }
}
