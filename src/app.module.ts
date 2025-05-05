import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ContactFormModule } from './contact-form/contact-form.module';

@Module({
  imports: [AuthModule, UsersModule, ContactFormModule],
})
export class AppModule {}
