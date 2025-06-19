import { Command, CommandProps } from '@odoonto7/shared';

export class UpdatePacienteMedicacionCommand extends Command {
  readonly pacienteId: string;
  readonly medicacion: string;

  constructor(props: CommandProps<UpdatePacienteMedicacionCommand>) {
    super(props);
    this.pacienteId = props.pacienteId;
    this.medicacion = props.medicacion;
  }
} 
