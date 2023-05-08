import {Controller, Get, Post, Body, Patch, Param, Delete, HttpCode} from '@nestjs/common';
import {CreateAuthDto} from './dto/create-auth.dto';
import {UpdateAuthDto} from './dto/update-auth.dto';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor (private readonly authService:AuthService) {}
  @HttpCode(200)
  @Post('register')
  async register (@Body() dto:CreateAuthDto) {
    return this.authService.register(dto)
  }

  @HttpCode(200)
  @Post('login/access-token')
  async getNewTokens (@Body() dto:string) {
    return this.authService.getNewTokens(dto)
  }

  @HttpCode(200)
  @Post('login')
  async login (@Body() dto:UpdateAuthDto) {
    return this.authService.login(dto)
  }
}
