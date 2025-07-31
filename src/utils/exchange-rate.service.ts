import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExchangeRate } from './exchange-rate.entity';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ExchangeRateService {
  private readonly logger = new Logger(ExchangeRateService.name);

  constructor(
    @InjectRepository(ExchangeRate)
    private exchangeRateRepository: Repository<ExchangeRate>,
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
  async updateExchangeRate(): Promise<ExchangeRate> {
    const solToUsdt = await this.fetchSolUsdtRate();
    const usdtToSol = 1 / solToUsdt;

    // 创建新的汇率记录
    const exchangeRate = this.exchangeRateRepository.create({
      solToUsdt,
      usdtToSol,
    });

    return this.exchangeRateRepository.save(exchangeRate);
  }

  /**
   * 获取最新的汇率
   */
  async getLatestExchangeRate(): Promise<ExchangeRate | null> {
    return this.exchangeRateRepository.findOne({
      order: { updatedAt: 'DESC' },
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