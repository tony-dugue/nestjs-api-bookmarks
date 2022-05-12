import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get('me') // /users/me
  getMe() {
    return 'user info';
  }
}

