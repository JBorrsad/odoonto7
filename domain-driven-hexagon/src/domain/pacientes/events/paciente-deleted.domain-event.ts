import { DomainEvent, DomainEventProps } from '@src/shared/ddd';

export class PacienteDeletedDomainEvent extends DomainEvent {
  constructor(props: DomainEventProps<PacienteDeletedDomainEvent>) {
    super(props);
  }
} 