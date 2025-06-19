import { Command, CommandProps } from '@src/shared/ddd';
import {
  CaraDiente,
  TipoLesion,
} from '@src/domain/odontogramas';

export class AgregarLesionCommand extends Command {
  readonly odontogramaId: string;
  readonly numeroDiente: string;
  readonly cara: CaraDiente;
  readonly tipo: TipoLesion;
  readonly descripcion?: string;

  constructor(props: CommandProps<AgregarLesionCommand>) {
    super(props);
    this.odontogramaId = props.odontogramaId;
    this.numeroDiente = props.numeroDiente;
    this.cara = props.cara;
    this.tipo = props.tipo;
    this.descripcion = props.descripcion;
  }
}
