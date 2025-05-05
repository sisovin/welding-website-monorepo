import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async register(registerDto: RegisterDto) {
    const hashedPassword = await argon2.hash(registerDto.password);
    const user = await this.usersService.create({
      ...registerDto,
      password: hashedPassword,
    });
    return this.generateToken(user);
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByEmail(loginDto.email);
    if (user && await argon2.verify(user.password, loginDto.password)) {
      return this.generateToken(user);
    }
    throw new Error('Invalid credentials');
  }

  private generateToken(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  extractTokenFromHeader(authorizationHeader: string): string {
    if (!authorizationHeader) {
      throw new UnauthorizedException('Authorization header is missing');
    }
    const parts = authorizationHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      throw new UnauthorizedException('Invalid authorization header format');
    }
    return parts[1];
  }

  validateToken(token: string): any {
    try {
      return this.jwtService.verify(token, {
        secret: this.configService.get<string>('JWT_SECRET'),
      });
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Token has expired');
      }
      throw new UnauthorizedException('Invalid token');
    }
  }

  getUserPayload(token: string): any {
    const payload = this.validateToken(token);
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }

  handleTokenExpirationError(error: any): void {
    if (error.name === 'TokenExpiredError') {
      throw new UnauthorizedException('Token has expired');
    }
    throw new UnauthorizedException('Invalid token');
  }
}
