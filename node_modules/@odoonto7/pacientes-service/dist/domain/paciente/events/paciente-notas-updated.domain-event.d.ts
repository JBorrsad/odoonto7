import { DomainEvent, DomainEventProps } from '@odoonto7/shared';
export declare class PacienteNotasUpdatedDomainEvent extends DomainEvent {
    readonly notas: string;
    constructor(props: DomainEventProps<PacienteNotasUpdatedDomainEvent>);
}
