import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrismaService } from '@nestjs/prisma';
import * as nodemailer from 'nodemailer';
import { ContactFormDto } from './dto/contact-form.dto';
import { ContactMessageDto } from './dto/contact-message.dto';

@Injectable()
export class ContactFormService {
  constructor(
    @InjectRepository(ContactMessageDto)
    private contactMessageRepository: Repository<ContactMessageDto>,
    private readonly prismaService: PrismaService,
  ) {}

  async handleFormSubmission(contactFormDto: ContactFormDto): Promise<ContactMessageDto> {
    const contactMessage = this.toContactMessage(contactFormDto);

    // Basic spam detection
    if (this.isSpam(contactMessage.message)) {
      contactMessage.isSpam = true;
    }

    // Store message in PostgreSQL
    await this.prismaService.contactMessage.create({
      data: contactMessage,
    });

    // Send email notification
    await this.sendEmailNotification(contactMessage);

    // Log submission for admin review
    console.log('New contact form submission:', contactMessage);

    return contactMessage;
  }

  private toContactMessage(contactFormDto: ContactFormDto): ContactMessageDto {
    const contactMessage = new ContactMessageDto();
    contactMessage.name = contactFormDto.name;
    contactMessage.email = contactFormDto.email;
    contactMessage.message = contactFormDto.message;
    contactMessage.createdAt = new Date();
    contactMessage.isSpam = false;
    return contactMessage;
  }

  private isSpam(message: string): boolean {
    const spamKeywords = ['spam', 'viagra', 'free money'];
    return spamKeywords.some(keyword => message.includes(keyword));
  }

  private async sendEmailNotification(contactMessage: ContactMessageDto): Promise<void> {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      text: `Name: ${contactMessage.name}\nEmail: ${contactMessage.email}\nMessage: ${contactMessage.message}`,
    };

    await transporter.sendMail(mailOptions);
  }
}
