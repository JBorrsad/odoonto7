import { ValueObject } from '@odoonto7/shared';
import { Guard } from '@odoonto7/shared';
import { ArgumentOutOfRangeException } from '@odoonto7/shared';

export interface AddressProps {
  country: string;
  postalCode: string;
  street: string;
}

export class Address extends ValueObject<AddressProps> {
  get country(): string {
    return this.props.country;
  }

  get postalCode(): string {
    return this.props.postalCode;
  }

  get street(): string {
    return this.props.street;
  }

  protected validate(props: AddressProps): void {
    if (!Guard.lengthIsBetween(props.country, 2, 50)) {
      throw new ArgumentOutOfRangeException('country is out of range');
    }
    if (!Guard.lengthIsBetween(props.street, 2, 50)) {
      throw new ArgumentOutOfRangeException('street is out of range');
    }
    if (!Guard.lengthIsBetween(props.postalCode, 2, 10)) {
      throw new ArgumentOutOfRangeException('postalCode is out of range');
    }
  }
}
