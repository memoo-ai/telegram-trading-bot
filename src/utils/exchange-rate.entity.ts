import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class ExchangeRate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  solToUsdt: number; // SOL兑换USDT的汇率

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  usdtToSol: number; // USDT兑换SOL的汇率

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}