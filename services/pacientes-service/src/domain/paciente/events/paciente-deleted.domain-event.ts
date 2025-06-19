import { DomainEvent, DomainEventProps } from '@odoonto7/shared';

export class PacienteDeletedDomainEvent extends DomainEvent {
  constructor(props: DomainEventProps<PacienteDeletedDomainEvent>) {
    super(props);
  }
} 
