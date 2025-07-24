import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('delete_wallet')
@Unique(['user', 'walletAddress']) 
export class DeleteWallet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  originalWalletId: string;

  @Column()
  walletName: string;

  @Column()
  walletAddress: string;

  @Column()
  walletPrivateKey: string; // 钱包私钥

  @Column()
  isDefaultWallet: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  deletedAt: Date; // 删除时间

  @Column({ type: 'timestamp' })
  originalCreatedAt: Date; // 原始创建时间

  @Column()
  balance: number;

  @Column()
  balanceUsd: number;

  @ManyToOne(() => User, user => user.wallets)
  user: User;
}