import { Command, CommandProps } from '@src/shared/ddd';

export class UpdatePacienteMedicacionCommand extends Command {
  readonly pacienteId: string;
  readonly medicacion: string;

  constructor(props: CommandProps<UpdatePacienteMedicacionCommand>) {
    super(props);
    this.pacienteId = props.pacienteId;
    this.medicacion = props.medicacion;
  }
} 