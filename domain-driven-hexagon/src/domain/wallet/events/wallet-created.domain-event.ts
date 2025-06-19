import { DomainEvent, DomainEventProps } from '@odoonto7/shared';

export class WalletCreatedDomainEvent extends DomainEvent {
  readonly userId: string;

  constructor(props: DomainEventProps<WalletCreatedDomainEvent>) {
    super(props);
  }
}
