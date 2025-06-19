import { DomainEvent, DomainEventProps } from '@odoonto7/shared';

export class UserAddressUpdatedDomainEvent extends DomainEvent {
  public readonly country: string;

  public readonly street: string;

  public readonly postalCode: string;

  constructor(props: DomainEventProps<UserAddressUpdatedDomainEvent>) {
    super(props);
    this.country = props.country;
    this.postalCode = props.postalCode;
    this.street = props.street;
  }
}
