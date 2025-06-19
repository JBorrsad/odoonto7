import { DomainEvent, DomainEventProps } from '@odoonto7/shared';
export declare class PacienteMedicacionUpdatedDomainEvent extends DomainEvent {
    readonly medicacion: string[];
    constructor(props: DomainEventProps<PacienteMedicacionUpdatedDomainEvent>);
}
