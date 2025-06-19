import { Command, CommandProps } from '@odoonto7/shared';

export class DeletePacienteCommand extends Command {
  readonly pacienteId: string;

  constructor(props: CommandProps<DeletePacienteCommand>) {
    super(props);
    this.pacienteId = props.pacienteId;
  }
}
