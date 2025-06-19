import { DomainEvent, DomainEventProps } from '@odoonto7/shared';

export class UserDeletedDomainEvent extends DomainEvent {
  constructor(props: DomainEventProps<UserDeletedDomainEvent>) {
    super(props);
  }
}
