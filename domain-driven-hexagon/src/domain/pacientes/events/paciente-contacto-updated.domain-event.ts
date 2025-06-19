import { DomainEvent, DomainEventProps } from '@src/shared/ddd';

export class PacienteContactoUpdatedDomainEvent extends DomainEvent {
  public readonly telefono: string;
  public readonly email: string;

  constructor(props: DomainEventProps<PacienteContactoUpdatedDomainEvent>) {
    super(props);
    this.telefono = props.telefono;
    this.email = props.email;
  }
}
