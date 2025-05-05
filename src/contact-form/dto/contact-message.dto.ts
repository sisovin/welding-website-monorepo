export class ContactMessageDto {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  isSpam: boolean;
}
