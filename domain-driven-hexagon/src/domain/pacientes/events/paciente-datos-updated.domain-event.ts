import { DomainEvent, DomainEventProps } from '@src/shared/ddd';
import { Sexo } from '../paciente.types';

export class PacienteDatosUpdatedDomainEvent extends DomainEvent {
  public readonly nombre: string;
  public readonly apellidos: string;
  public readonly edad: number;
  public readonly sexo: Sexo;

  constructor(props: DomainEventProps<PacienteDatosUpdatedDomainEvent>) {
    super(props);
    this.nombre = props.nombre;
    this.apellidos = props.apellidos;
    this.edad = props.edad;
    this.sexo = props.sexo;
  }
}
