import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../common/prisma/prisma.service';

@Injectable()
export class ExchangeRateService {
  private readonly logger = new Logger(ExchangeRateService.name);

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  /**
   * 从外部API获取SOL/USDT汇率
   */
  async fetchSolUsdtRate(): Promise<number> {
    try {
      // 这里使用CoinGecko API作为示例，实际项目中可能需要使用其他API
      const apiKey = this.configService.get<string>('COINGECKO_API_KEY');
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usdt',
        { headers: { 'x-cg-api-key': apiKey } },
      );

      const solPrice = response.data.solana.usdt;
      this.logger.log(`Fetched SOL/USDT rate: ${solPrice}`);
      return solPrice;
    } catch (error) {
      this.logger.error('Failed to fetch SOL/USDT rate', error);
      throw new Error('Failed to fetch SOL/USDT rate');
    }
  }

  /**
   * 更新数据库中的汇率
   */
  async updateExchangeRate() {
    const solToUsdt = await this.fetchSolUsdtRate();
    const usdtToSol = 1 / solToUsdt;

    // 创建新的汇率记录
    return this.prisma.exchange_rate.create({
      data: {
        solToUsdt,
        usdtToSol,
      },
    });
  }

  /**
   * 获取最新的汇率
   */
  async getLatestExchangeRate() {
    return this.prisma.exchange_rate.findFirst({
      orderBy: { updated_at: 'desc' },
    });
  }

  /**
   * 定期更新汇率的任务
   */
  async scheduledUpdateTask() {
    try {
      await this.updateExchangeRate();
      this.logger.log('Exchange rate updated successfully!');
    } catch (error) {
      this.logger.error('Failed to update exchange rate', error);
    }
  }
}