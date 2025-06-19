import { DomainEvent, DomainEventProps } from '@src/shared/ddd';

export class PacienteAlergiasUpdatedDomainEvent extends DomainEvent {
  public readonly alergias: string;

  constructor(props: DomainEventProps<PacienteAlergiasUpdatedDomainEvent>) {
    super(props);
    this.alergias = props.alergias;
  }
}
