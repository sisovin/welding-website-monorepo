import { ContactMessageDto } from './contact-message.dto';

export class ResponseDto {
  success: boolean;
  message: string;
  contactMessage?: ContactMessageDto;
  recaptcha?: string;
}
