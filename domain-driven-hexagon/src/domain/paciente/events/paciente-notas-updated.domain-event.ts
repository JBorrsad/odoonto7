import { DomainEvent, DomainEventProps } from '@src/shared/ddd';

export class PacienteNotasUpdatedDomainEvent extends DomainEvent {
  public readonly notas: string;

  constructor(props: DomainEventProps<PacienteNotasUpdatedDomainEvent>) {
    super(props);
    this.notas = props.notas;
  }
}
