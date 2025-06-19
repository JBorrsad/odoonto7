import { Command, CommandProps } from '@odoonto7/shared';

export class UpdatePacienteContactoCommand extends Command {
  readonly pacienteId: string;
  readonly telefono?: string;
  readonly email?: string;

  constructor(props: CommandProps<UpdatePacienteContactoCommand>) {
    super(props);
    this.pacienteId = props.pacienteId;
    this.telefono = props.telefono;
    this.email = props.email;
  }
}

