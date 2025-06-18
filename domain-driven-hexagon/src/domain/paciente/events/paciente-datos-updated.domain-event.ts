import { DomainEvent, DomainEventProps } from '@src/shared/ddd';

export class PacienteDatosUpdatedDomainEvent extends DomainEvent {
  public readonly nombre: string;
  public readonly apellidos: string;
  public readonly edad: number;
  public readonly sexo: string;

  constructor(props: DomainEventProps<PacienteDatosUpdatedDomainEvent>) {
    super(props);
    this.nombre = props.nombre;
    this.apellidos = props.apellidos;
    this.edad = props.edad;
    this.sexo = props.sexo;
  }
}
