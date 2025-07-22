import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Wallet } from '../../wallet/entities/wallet.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, type: 'bigint' })
  tgId: number;

  @Column({ nullable: true })
  isBot: boolean;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column()
  inviteCode: string;

  @OneToMany(() => Wallet, wallet => wallet.user)
  wallets: Wallet[];
} 