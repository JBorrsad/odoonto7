import { DomainEvent, DomainEventProps } from '@odoonto7/shared';
export declare class PacienteHemorragiasUpdatedDomainEvent extends DomainEvent {
    readonly hemorragiasDentales: boolean;
    constructor(props: DomainEventProps<PacienteHemorragiasUpdatedDomainEvent>);
}
