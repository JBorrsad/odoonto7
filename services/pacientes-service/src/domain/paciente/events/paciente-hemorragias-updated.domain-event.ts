import { DomainEvent, DomainEventProps } from '@odoonto7/shared';

export class PacienteHemorragiasUpdatedDomainEvent extends DomainEvent {
  readonly hemorragiasDentales: boolean;

  constructor(props: DomainEventProps<PacienteHemorragiasUpdatedDomainEvent>) {
    super(props);
    this.hemorragiasDentales = props.hemorragiasDentales;
  }
} 
