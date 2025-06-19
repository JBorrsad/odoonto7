import { DomainEvent, DomainEventProps } from '@odoonto7/shared';
export declare class PacienteAlergiasUpdatedDomainEvent extends DomainEvent {
    readonly alergias: string[];
    constructor(props: DomainEventProps<PacienteAlergiasUpdatedDomainEvent>);
}
