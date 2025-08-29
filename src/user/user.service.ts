import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // 推荐：更通用的业务逻辑方法
  async checkOrCreateAndUpdateUser(userInfo: {
    tgId: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    isBot?: boolean;
    referralCode?: string
  }) {
    let user = await this.prisma.user.findUnique({ where: { tgId: userInfo.tgId } });
    if (!user) {
      // 生成唯一邀请码
      let inviteCode = await this.generateUniqueInviteCode();
      user = await this.prisma.user.create({
        data: { ...userInfo, inviteCode }
      });
      console.log("create user", userInfo)
    } else {
      user = await this.prisma.user.update({
        where: { id: user.id },
        data: {
          username: userInfo?.username ?? null,
          firstName: userInfo?.firstName ?? null,
          lastName: userInfo?.lastName ?? null,
          isBot: userInfo.isBot
        }
      });
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
      exists = !!(await this.prisma.user.findUnique({ where: { inviteCode: code } }));
    }
    return code;
  }

  // 通过 tgId 查找用户
  async findByTgId(tgId: number) {
    return this.prisma.user.findUnique({ where: { tgId } });
  }

  async setAgreedToTerms(tgId: number, agreed: boolean) {
    const user = await this.prisma.user.findUnique({ where: { tgId } });
    if (user) {
      await this.prisma.user.update({
        where: { id: user.id },
        data: { agreedToTerms: agreed }
      });
    }
  }
}
