// create-article.dto.ts
import { IsString, Length } from 'class-validator';

export class CreateWalletDto {
  @IsString()
  @Length(1, 255)
  tgId: string;

  @IsString()
  walletName: string;

  @IsString()
  walletAddress: string;
}
