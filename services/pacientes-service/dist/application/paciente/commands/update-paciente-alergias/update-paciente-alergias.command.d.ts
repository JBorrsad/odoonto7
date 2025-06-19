import { Command, CommandProps } from '@odoonto7/shared';
export declare class UpdatePacienteAlergiasCommand extends Command {
    readonly pacienteId: string;
    readonly alergias: string;
    constructor(props: CommandProps<UpdatePacienteAlergiasCommand>);
}
