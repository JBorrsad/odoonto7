import { DomainEvent, DomainEventProps } from '@src/shared/ddd';

export class PacientePatologiasUpdatedDomainEvent extends DomainEvent {
  readonly patologiasMedicas: string;

  constructor(props: DomainEventProps<PacientePatologiasUpdatedDomainEvent>) {
    super(props);
    this.patologiasMedicas = props.patologiasMedicas;
  }
}
