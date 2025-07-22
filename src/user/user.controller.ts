import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':tgId')
  async getUserByTgId(@Param('tgId') tgId: number): Promise<User | undefined> {
    return this.userService.findByTgId(Number(tgId));
  }
} 