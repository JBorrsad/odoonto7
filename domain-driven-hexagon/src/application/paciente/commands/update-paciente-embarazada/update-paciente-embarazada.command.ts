import { Command, CommandProps } from '@src/shared/ddd';

export class UpdatePacienteEmbarazadaCommand extends Command {
  readonly pacienteId: string;
  readonly embarazada: boolean;

  constructor(props: CommandProps<UpdatePacienteEmbarazadaCommand>) {
    super(props);
    this.pacienteId = props.pacienteId;
    this.embarazada = props.embarazada;
  }
} 