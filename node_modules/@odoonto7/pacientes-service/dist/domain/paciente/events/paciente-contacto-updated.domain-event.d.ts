import { DomainEvent, DomainEventProps } from '@odoonto7/shared';
export declare class PacienteContactoUpdatedDomainEvent extends DomainEvent {
    readonly telefono: string;
    readonly email: string;
    constructor(props: DomainEventProps<PacienteContactoUpdatedDomainEvent>);
}
