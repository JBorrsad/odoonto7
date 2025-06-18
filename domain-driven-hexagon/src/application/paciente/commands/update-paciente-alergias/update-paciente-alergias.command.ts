export class UpdatePacienteAlergiasCommand {
  readonly pacienteId: string;
  readonly alergias: string;

  constructor(props: UpdatePacienteAlergiasCommand) {
    this.pacienteId = props.pacienteId;
    this.alergias = props.alergias;
  }
}
