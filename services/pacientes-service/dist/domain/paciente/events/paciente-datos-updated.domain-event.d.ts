import { DomainEvent, DomainEventProps } from '@odoonto7/shared';
import { Sexo } from '../types';
export declare class PacienteDatosUpdatedDomainEvent extends DomainEvent {
    readonly nombre: string;
    readonly apellidos: string;
    readonly edad: number;
    readonly sexo: Sexo;
    constructor(props: DomainEventProps<PacienteDatosUpdatedDomainEvent>);
}
