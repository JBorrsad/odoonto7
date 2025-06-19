import { DomainEvent, DomainEventProps } from '@odoonto7/shared';

export class PacienteAlergiasUpdatedDomainEvent extends DomainEvent {
  public readonly alergias: string;

  constructor(props: DomainEventProps<PacienteAlergiasUpdatedDomainEvent>) {
    super(props);
    this.alergias = props.alergias;
  }
}
