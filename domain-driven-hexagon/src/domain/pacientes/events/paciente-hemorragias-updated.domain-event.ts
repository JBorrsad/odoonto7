import { DomainEvent, DomainEventProps } from '@src/shared/ddd';

export class PacienteHemorragiasUpdatedDomainEvent extends DomainEvent {
  readonly hemorragiasDentales: boolean;

  constructor(props: DomainEventProps<PacienteHemorragiasUpdatedDomainEvent>) {
    super(props);
    this.hemorragiasDentales = props.hemorragiasDentales;
  }
} 