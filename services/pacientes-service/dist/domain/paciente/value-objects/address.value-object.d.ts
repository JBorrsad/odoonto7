import { ValueObject } from '@odoonto7/shared';
export interface AddressProps {
    country: string;
    postalCode: string;
    street: string;
}
export declare class Address extends ValueObject<AddressProps> {
    get country(): string;
    get postalCode(): string;
    get street(): string;
    unpack(): AddressProps;
    protected validate(props: AddressProps): void;
}
