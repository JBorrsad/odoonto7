import { DomainEvent, DomainEventProps } from '@src/shared/ddd';
import { Sexo } from '../types';

export class PacienteCreatedDomainEvent extends DomainEvent {
  readonly nombre: string;
  readonly apellidos: string;
  readonly edad: number;
  readonly sexo: Sexo;
  readonly telefono: string;
  readonly email: string;
  readonly alergias: string;
  readonly notas: string;
  readonly medicacion: string;
  readonly patologiasMedicas: string;
  readonly embarazada?: boolean;
  readonly hemorragiasDentales: boolean;
  readonly country: string;
  readonly postalCode: string;
  readonly street: string;

  constructor(props: DomainEventProps<PacienteCreatedDomainEvent>) {
    super(props);
    this.nombre = props.nombre;
    this.apellidos = props.apellidos;
    this.edad = props.edad;
    this.sexo = props.sexo;
    this.telefono = props.telefono;
    this.email = props.email;
    this.alergias = props.alergias;
    this.notas = props.notas;
    this.medicacion = props.medicacion;
    this.patologiasMedicas = props.patologiasMedicas;
    this.embarazada = props.embarazada;
    this.hemorragiasDentales = props.hemorragiasDentales;
    this.country = props.country;
    this.postalCode = props.postalCode;
    this.street = props.street;
  }
}
