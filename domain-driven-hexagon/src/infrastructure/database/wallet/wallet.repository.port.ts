import { RepositoryPort } from '@src/shared/ddd';
import { WalletEntity } from '@src/domain/wallet/wallet.entity';

export type WalletRepositoryPort = RepositoryPort<WalletEntity>;
