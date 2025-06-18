import { Logger, Module, Provider } from '@nestjs/common';
import { CreateWalletWhenUserIsCreatedDomainEventHandler } from '@src/application/wallet/create-wallet-when-user-is-created.domain-event-handler';
import { WalletRepository } from '@src/infrastructure/database/wallet/wallet.repository';
import { WALLET_REPOSITORY } from './wallet.di-tokens';
import { WalletMapper } from '@src/infrastructure/database/wallet/wallet.mapper';

const eventHandlers: Provider[] = [
  CreateWalletWhenUserIsCreatedDomainEventHandler,
];

const mappers: Provider[] = [WalletMapper];

const repositories: Provider[] = [
  { provide: WALLET_REPOSITORY, useClass: WalletRepository },
];

@Module({
  imports: [],
  controllers: [],
  providers: [Logger, ...eventHandlers, ...mappers, ...repositories],
})
export class WalletModule {}
