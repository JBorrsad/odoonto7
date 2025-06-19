import { DomainEvent, DomainEventProps } from '@src/shared/ddd';
import { CaraDiente, TipoLesion } from '../types';

export class LesionAgregadaDomainEvent extends DomainEvent {
  readonly numeroDiente: string;
  readonly cara: CaraDiente;
  readonly lesionId: string;
  readonly tipo: TipoLesion;

  constructor(props: DomainEventProps<LesionAgregadaDomainEvent>) {
    super(props);
    this.numeroDiente = props.numeroDiente;
    this.cara = props.cara;
    this.lesionId = props.lesionId;
    this.tipo = props.tipo;
  }
}
