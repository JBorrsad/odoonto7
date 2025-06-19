import { Command, CommandProps } from '@odoonto7/shared';
export declare class UpdatePacientePatologiasCommand extends Command {
    readonly pacienteId: string;
    readonly patologiasMedicas: string;
    constructor(props: CommandProps<UpdatePacientePatologiasCommand>);
}
