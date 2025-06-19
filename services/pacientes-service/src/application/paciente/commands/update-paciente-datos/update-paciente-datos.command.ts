import { Command, CommandProps } from '@odoonto7/shared';
import { Sexo } from '../../../../domain/paciente';

export class UpdatePacienteDatosCommand extends Command {
  readonly pacienteId: string;
  readonly nombre?: string;
  readonly apellidos?: string;
  readonly edad?: number;
  readonly sexo?: Sexo;

  constructor(props: CommandProps<UpdatePacienteDatosCommand>) {
    super(props);
    this.pacienteId = props.pacienteId;
    this.nombre = props.nombre;
    this.apellidos = props.apellidos;
    this.edad = props.edad;
    this.sexo = props.sexo;
  }
}



