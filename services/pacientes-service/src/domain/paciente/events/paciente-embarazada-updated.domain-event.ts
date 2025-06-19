import { DomainEvent, DomainEventProps } from '@odoonto7/shared';

export class PacienteEmbarazadaUpdatedDomainEvent extends DomainEvent {
  readonly embarazada: boolean;

  constructor(props: DomainEventProps<PacienteEmbarazadaUpdatedDomainEvent>) {
    super(props);
    this.embarazada = props.embarazada;
  }
} 
