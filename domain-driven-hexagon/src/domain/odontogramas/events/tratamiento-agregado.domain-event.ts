import { DomainEvent, DomainEventProps } from '@src/shared/ddd';
import { CaraDiente, TipoTratamiento } from '../types';

export class TratamientoAgregadoDomainEvent extends DomainEvent {
  readonly numeroDiente: string;
  readonly cara: CaraDiente;
  readonly tratamientoId: string;
  readonly tipo: TipoTratamiento;

  constructor(props: DomainEventProps<TratamientoAgregadoDomainEvent>) {
    super(props);
    this.numeroDiente = props.numeroDiente;
    this.cara = props.cara;
    this.tratamientoId = props.tratamientoId;
    this.tipo = props.tipo;
  }
}
