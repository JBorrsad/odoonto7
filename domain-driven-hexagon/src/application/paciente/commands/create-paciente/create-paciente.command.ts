import { Command, CommandProps } from '@src/shared/ddd';

export class CreatePacienteCommand extends Command {
  readonly nombre: string;
  readonly apellidos: string;
  readonly edad: number;
  readonly sexo: string;
  readonly telefono: string;
  readonly email: string;
  readonly alergias: string;
  readonly notas: string;
  readonly country: string;
  readonly postalCode: string;
  readonly street: string;

  constructor(props: CommandProps<CreatePacienteCommand>) {
    super(props);
    this.nombre = props.nombre;
    this.apellidos = props.apellidos;
    this.edad = props.edad;
    this.sexo = props.sexo;
    this.telefono = props.telefono;
    this.email = props.email;
    this.alergias = props.alergias;
    this.notas = props.notas;
    this.country = props.country;
    this.postalCode = props.postalCode;
    this.street = props.street;
  }
}
