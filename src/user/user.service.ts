import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  // 推荐：更通用的业务逻辑方法
  async checkOrCreateAndUpdateUser(userInfo: {
    tgId: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    isBot?: boolean;
  }): Promise<User> {
    let user = await this.userRepo.findOne({ where: { tgId: userInfo.tgId } });
    if (!user) {
      console.log("no user",userInfo )
      user = this.userRepo.create(userInfo);
      await this.userRepo.save(user);
      console.log("create user", userInfo)
    } else {
      user.username = userInfo?.username ?? null;
      user.firstName = userInfo?.firstName ?? null;
      user.lastName = userInfo?.lastName ?? null;
      user.isBot = userInfo.isBot;
      await this.userRepo.save(user);
    }
    return user;
  }

  // 通过 tgId 查找用户
  async findByTgId(tgId: number): Promise<User | undefined> {
    return this.userRepo.findOne({ where: { tgId } });
  }
}
