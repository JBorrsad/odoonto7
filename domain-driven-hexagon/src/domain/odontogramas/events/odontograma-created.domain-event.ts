import { DomainEvent, DomainEventProps } from '@src/shared/ddd';
import { TipoDentadura } from '../odontograma.types';

export class OdontogramaCreatedDomainEvent extends DomainEvent {
  readonly tipoDentadura: TipoDentadura;

  constructor(props: DomainEventProps<OdontogramaCreatedDomainEvent>) {
    super(props);
    this.tipoDentadura = props.tipoDentadura;
  }
}
