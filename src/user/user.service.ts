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
    referralCode?: string
  }): Promise<User> {
    let user = await this.userRepo.findOne({ where: { tgId: userInfo.tgId } });
    if (!user) {
      // 生成唯一邀请码
      let inviteCode = await this.generateUniqueInviteCode();
      user = this.userRepo.create({ ...userInfo, inviteCode });
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

  // 生成唯一邀请码，规则：大写字母+数字，长度8位
  private async generateUniqueInviteCode(): Promise<string> {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    let exists = true;
    while (exists) {
      code = Array.from({ length: 8 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
      exists = !!(await this.userRepo.findOne({ where: { inviteCode: code } }));
    }
    return code;
  }

  // 通过 tgId 查找用户
  async findByTgId(tgId: number): Promise<User | undefined> {
    return this.userRepo.findOne({ where: { tgId } });
  }

  async setAgreedToTerms(tgId: number, agreed: boolean) {
    const user = await this.userRepo.findOne({ where: { tgId } });
    if (user) {
      user.agreedToTerms = agreed;
      await this.userRepo.save(user);
    }
  }
}
