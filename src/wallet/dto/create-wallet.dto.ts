// create-article.dto.ts
import { IsString, IsBoolean, Length } from 'class-validator';

export class CreateWalletDto {
  @IsString()
  @Length(1, 255)
  walletName: string;

  @IsBoolean()
  isDefaultWallet: boolean;

  @IsString()
  walletAddress: string;

  @IsString()
  walletPrivateKey: string;
}
