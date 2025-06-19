import { DomainEvent, DomainEventProps } from '@src/shared/ddd';

export class PacienteEmbarazadaUpdatedDomainEvent extends DomainEvent {
  readonly embarazada: boolean;

  constructor(props: DomainEventProps<PacienteEmbarazadaUpdatedDomainEvent>) {
    super(props);
    this.embarazada = props.embarazada;
  }
} 