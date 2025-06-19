import { Command, CommandProps } from '@odoonto7/shared';

export class AgregarTratamientoCommand extends Command {
  readonly pacienteId: string;
  readonly numeroDiente: string;
  readonly cara: string;
  readonly tipo: string;
  readonly descripcion?: string;

  constructor(props: CommandProps<AgregarTratamientoCommand>) {
    super(props);
    this.pacienteId = props.pacienteId;
    this.numeroDiente = props.numeroDiente;
    this.cara = props.cara;
    this.tipo = props.tipo;
    this.descripcion = props.descripcion;
  }
} 
