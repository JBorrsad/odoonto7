import { DomainEvent, DomainEventProps } from '@odoonto7/shared';
import { TipoDentadura } from '../types';

export class OdontogramaCreatedDomainEvent extends DomainEvent {
  readonly tipoDentadura: TipoDentadura;

  constructor(props: DomainEventProps<OdontogramaCreatedDomainEvent>) {
    super(props);
    this.tipoDentadura = props.tipoDentadura;
  }
}
