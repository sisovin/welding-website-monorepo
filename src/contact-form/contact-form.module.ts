import { Module } from '@nestjs/common';
import { RateLimiterModule } from 'nestjs-rate-limiter';
import { ContactFormController } from './contact-form.controller';

@Module({
  imports: [RateLimiterModule],
  controllers: [ContactFormController],
})
export class ContactFormModule {}
