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

  @ManyToOne(() => User, user => user.wallets)
  user: User;
}
