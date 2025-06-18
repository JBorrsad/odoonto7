import { Command, CommandProps } from '@src/shared/ddd';

export class UpdatePacientePatologiasCommand extends Command {
  readonly pacienteId: string;
  readonly patologiasMedicas: string;

  constructor(props: CommandProps<UpdatePacientePatologiasCommand>) {
    super(props);
    this.pacienteId = props.pacienteId;
    this.patologiasMedicas = props.patologiasMedicas;
  }
} 