import { DomainEvent, DomainEventProps } from '@odoonto7/shared';

export class PacienteNotasUpdatedDomainEvent extends DomainEvent {
  public readonly notas: string;

  constructor(props: DomainEventProps<PacienteNotasUpdatedDomainEvent>) {
    super(props);
    this.notas = props.notas;
  }
}
