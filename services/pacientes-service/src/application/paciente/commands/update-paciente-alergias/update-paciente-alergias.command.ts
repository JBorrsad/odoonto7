import { Command, CommandProps } from '@odoonto7/shared';

export class UpdatePacienteAlergiasCommand extends Command {
  readonly pacienteId: string;
  readonly alergias: string;

  constructor(props: CommandProps<UpdatePacienteAlergiasCommand>) {
    super(props);
    this.pacienteId = props.pacienteId;
    this.alergias = props.alergias;
  }
}

