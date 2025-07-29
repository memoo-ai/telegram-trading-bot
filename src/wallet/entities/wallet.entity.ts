import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
@Unique(['user', 'walletAddress']) 
export class Wallet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Index()
  // @Column()
  // tgId: number;

  @Column()
  walletName: string;

  @Column()
  walletAddress: string;

  @Column()
  walletPrivateKey: string; // 钱包私钥

  @Column()
  isDefaultWallet: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date; // 这里应该是时间戳

  @Column({ default: 0 })
  balance: number;

  @Column({ default: 0 })
  balanceUsd: number;

  @ManyToOne(() => User, user => user.wallets)
  user: User;
}
