import { MyContext } from '../type';

export interface CommandHandler {
  /**
   * 处理指令
   * @param ctx 上下文对象
   * @param edit 是否为编辑消息
   */
  handle(ctx: MyContext, edit?: boolean): Promise<void>;

  /**
   * 获取指令标识符
   */
  getCommand(): string;
}