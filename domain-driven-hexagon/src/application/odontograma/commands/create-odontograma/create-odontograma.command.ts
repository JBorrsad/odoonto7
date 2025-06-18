import { Command, CommandProps } from '@src/shared/ddd';
import { TipoDentadura } from '@src/domain/odontograma/odontograma.types';

export class CreateOdontogramaCommand extends Command {
  readonly pacienteId: string;
  readonly tipoDentadura: TipoDentadura;

  constructor(props: CommandProps<CreateOdontogramaCommand>) {
    super(props);
    this.pacienteId = props.pacienteId;
    this.tipoDentadura = props.tipoDentadura;
  }
} 