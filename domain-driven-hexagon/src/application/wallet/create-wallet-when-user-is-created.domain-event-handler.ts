import { UserCreatedDomainEvent } from '@src/domain/user/events/user-created.domain-event';
import { WalletRepositoryPort } from '@src/infrastructure/database/wallet/wallet.repository.port';
import { WalletEntity } from '@src/domain/wallet/wallet.entity';
import { OnEvent } from '@nestjs/event-emitter';
import { Inject, Injectable } from '@nestjs/common';
import { WALLET_REPOSITORY } from '@src/config/modules/wallet.di-tokens';

@Injectable()
export class CreateWalletWhenUserIsCreatedDomainEventHandler {
  constructor(
    @Inject(WALLET_REPOSITORY)
    private readonly walletRepo: WalletRepositoryPort,
  ) {}

  // Handle a Domain Event by performing changes to other aggregates (inside the same Domain).
  @OnEvent(UserCreatedDomainEvent.name, { async: true, promisify: true })
  async handle(event: UserCreatedDomainEvent): Promise<any> {
    const wallet = WalletEntity.create({
      userId: event.aggregateId,
    });
    return this.walletRepo.insert(wallet);
  }
}
