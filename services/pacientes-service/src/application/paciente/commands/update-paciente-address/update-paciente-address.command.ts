import { Command, CommandProps } from '@odoonto7/shared';

export class UpdatePacienteAddressCommand extends Command {
  readonly pacienteId: string;
  readonly country?: string;
  readonly postalCode?: string;
  readonly street?: string;

  constructor(props: CommandProps<UpdatePacienteAddressCommand>) {
    super(props);
    this.pacienteId = props.pacienteId;
    this.country = props.country;
    this.postalCode = props.postalCode;
    this.street = props.street;
  }
}

