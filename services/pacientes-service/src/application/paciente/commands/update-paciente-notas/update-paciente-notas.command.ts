import { Command, CommandProps } from '@odoonto7/shared';

export class UpdatePacienteNotasCommand extends Command {
  readonly pacienteId: string;
  readonly notas: string;

  constructor(props: CommandProps<UpdatePacienteNotasCommand>) {
    super(props);
    this.pacienteId = props.pacienteId;
    this.notas = props.notas;
  }
}

