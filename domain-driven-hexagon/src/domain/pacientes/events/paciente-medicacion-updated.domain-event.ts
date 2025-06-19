import { DomainEvent, DomainEventProps } from '@src/shared/ddd';

export class PacienteMedicacionUpdatedDomainEvent extends DomainEvent {
  readonly medicacion: string;

  constructor(props: DomainEventProps<PacienteMedicacionUpdatedDomainEvent>) {
    super(props);
    this.medicacion = props.medicacion;
  }
}
