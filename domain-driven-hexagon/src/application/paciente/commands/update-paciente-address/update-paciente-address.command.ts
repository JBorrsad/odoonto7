export class UpdatePacienteAddressCommand {
  readonly pacienteId: string;
  readonly country?: string;
  readonly postalCode?: string;
  readonly street?: string;

  constructor(props: UpdatePacienteAddressCommand) {
    this.pacienteId = props.pacienteId;
    this.country = props.country;
    this.postalCode = props.postalCode;
    this.street = props.street;
  }
}
