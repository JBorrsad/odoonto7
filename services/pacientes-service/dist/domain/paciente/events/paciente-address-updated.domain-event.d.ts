import { DomainEvent, DomainEventProps } from '@odoonto7/shared';
export declare class PacienteAddressUpdatedDomainEvent extends DomainEvent {
    readonly country: string;
    readonly street: string;
    readonly postalCode: string;
    constructor(props: DomainEventProps<PacienteAddressUpdatedDomainEvent>);
}
