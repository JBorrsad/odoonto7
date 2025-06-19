import { DomainEvent, DomainEventProps } from '@odoonto7/shared';
export declare class PacientePatologiasUpdatedDomainEvent extends DomainEvent {
    readonly patologiasMedicas: string[];
    constructor(props: DomainEventProps<PacientePatologiasUpdatedDomainEvent>);
}
