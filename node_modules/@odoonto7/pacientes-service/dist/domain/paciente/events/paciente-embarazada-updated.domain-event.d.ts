import { DomainEvent, DomainEventProps } from '@odoonto7/shared';
export declare class PacienteEmbarazadaUpdatedDomainEvent extends DomainEvent {
    readonly embarazada: boolean;
    constructor(props: DomainEventProps<PacienteEmbarazadaUpdatedDomainEvent>);
}
