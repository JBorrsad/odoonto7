import { Command, CommandProps } from '@src/shared/ddd';

export class DeletePacienteCommand extends Command {
  readonly pacienteId: string;

  constructor(props: CommandProps<DeletePacienteCommand>) {
    super(props);
    this.pacienteId = props.pacienteId;
  }
}
