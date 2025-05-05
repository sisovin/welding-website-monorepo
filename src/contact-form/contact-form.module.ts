import { Module } from '@nestjs/common';
import { RateLimiterModule } from 'nestjs-rate-limiter';
import { ContactFormController } from './contact-form.controller';
import { ContactFormService } from './contact-form.service';

@Module({
  imports: [RateLimiterModule],
  controllers: [ContactFormController],
  providers: [ContactFormService],
})
export class ContactFormModule {}
