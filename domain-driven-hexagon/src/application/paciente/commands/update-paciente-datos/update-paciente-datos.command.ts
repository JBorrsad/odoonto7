import { Sexo } from '@src/domain/pacientes';

export class UpdatePacienteDatosCommand {
  readonly pacienteId: string;
  readonly nombre?: string;
  readonly apellidos?: string;
  readonly edad?: number;
  readonly sexo?: Sexo;

  constructor(props: UpdatePacienteDatosCommand) {
    this.pacienteId = props.pacienteId;
    this.nombre = props.nombre;
    this.apellidos = props.apellidos;
    this.edad = props.edad;
    this.sexo = props.sexo;
  }
}
