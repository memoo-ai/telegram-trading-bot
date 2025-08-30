import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';

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
    let user = await this.prisma.bot_users.findUnique({ where: { tgId: userInfo.tgId } });
    if (!user) {
      // 生成唯一邀请码
      let inviteCode = await this.generateUniqueInviteCode();
      user = await this.prisma.bot_users.create({
        data: { ...userInfo, inviteCode, referralCode: userInfo.referralCode || null }
      });
      console.log("create user", userInfo)
    } else {
      user = await this.prisma.bot_users.update({
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
      exists = !!(await this.prisma.bot_users.findFirst({ where: { inviteCode: code } }));
    }
    return code;
  }

  // 通过 tgId 查找用户
  async findByTgId(tgId: number) {
    const user = await this.prisma.bot_users.findUnique({ where: { tgId } });
    if (user) {
      // 转换bigint类型的tgId为number类型，并添加wallets空数组
      return {
        ...user,
        tgId: Number(user.tgId), // 确保tgId是number类型
        wallets: []
      };
    }
    return null;
  }

  async setAgreedToTerms(tgId: number, agreed: boolean) {
    const user = await this.prisma.bot_users.findUnique({ where: { tgId } });
    if (user) {
      await this.prisma.bot_users.update({
        where: { id: user.id },
        data: { agreedToTerms: agreed }
      });
    }
  }
}
