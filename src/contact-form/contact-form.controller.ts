import { Controller, Post, Body, UsePipes, ValidationPipe, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { RateLimiterGuard } from 'nestjs-rate-limiter';
import { ContactFormDto } from './dto/contact-form.dto';
import { ResponseDto } from './dto/response.dto';

@Controller('contact-form')
@UseGuards(RateLimiterGuard)
export class ContactFormController {
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async postContactForm(@Body() contactFormDto: ContactFormDto): Promise<ResponseDto> {
    const { name, email, message } = contactFormDto;

    // Simple spam filtering
    const spamPatterns = [/free money/i, /work from home/i, /click here/i];
    if (spamPatterns.some(pattern => pattern.test(message))) {
      throw new HttpException('Spam detected', HttpStatus.BAD_REQUEST);
    }

    // Here you would typically handle the form submission, e.g., save to database, send email, etc.
    // For this example, we'll just return a success response.

    return {
      success: true,
      message: 'Form submitted successfully',
    };
  }
}
