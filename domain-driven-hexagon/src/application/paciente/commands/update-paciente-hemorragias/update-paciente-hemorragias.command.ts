import { Command, CommandProps } from '@src/shared/ddd';

export class UpdatePacienteHemorragiasCommand extends Command {
  readonly pacienteId: string;
  readonly hemorragiasDentales: boolean;

  constructor(props: CommandProps<UpdatePacienteHemorragiasCommand>) {
    super(props);
    this.pacienteId = props.pacienteId;
    this.hemorragiasDentales = props.hemorragiasDentales;
  }
} 