import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ExchangeRateService } from './exchange-rate.service';

@Injectable()
export class ExchangeRateScheduler {
  private readonly logger = new Logger(ExchangeRateScheduler.name);

  constructor(private readonly exchangeRateService: ExchangeRateService) {}

  /**
   * 每小时更新一次汇率
   * 表达式解释: 0 0 * * * * - 每分钟的第0秒，每小时的第0分钟，每天，每月，每周的任意一天
   */
  @Cron(CronExpression.EVERY_HOUR) // 每小时执行一次
  async handleCron() {
    this.logger.debug('Starting scheduled exchange rate update');
    await this.exchangeRateService.scheduledUpdateTask();
    this.logger.debug('Scheduled exchange rate update completed');
  }

  /**
   * 应用启动时立即更新一次汇率
   */
  async onModuleInit() {
    this.logger.debug('Initial exchange rate update on module init');
    await this.exchangeRateService.scheduledUpdateTask();
  }
}