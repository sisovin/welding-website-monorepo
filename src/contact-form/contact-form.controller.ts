import { Controller, Post, Body, UsePipes, ValidationPipe, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { RateLimiterGuard } from 'nestjs-rate-limiter';
import { ContactFormDto } from './dto/contact-form.dto';
import { ResponseDto } from './dto/response.dto';
import { ContactFormService } from './contact-form.service';

@Controller('contact-form')
@UseGuards(RateLimiterGuard)
export class ContactFormController {
  constructor(private readonly contactFormService: ContactFormService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async postContactForm(@Body() contactFormDto: ContactFormDto): Promise<ResponseDto> {
    return this.contactFormService.handleFormSubmission(contactFormDto);
  }
}
