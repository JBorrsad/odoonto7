import { DomainEvent, DomainEventProps } from '@src/shared/ddd';
import { TipoDentadura } from '../types';

export class TipoDentaduraCambiadoDomainEvent extends DomainEvent {
  readonly tipoAnterior: TipoDentadura;
  readonly tipoNuevo: TipoDentadura;

  constructor(props: DomainEventProps<TipoDentaduraCambiadoDomainEvent>) {
    super(props);
    this.tipoAnterior = props.tipoAnterior;
    this.tipoNuevo = props.tipoNuevo;
  }
}
