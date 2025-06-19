import { Command, CommandProps } from '@odoonto7/shared';
export declare class UpdatePacienteEmbarazadaCommand extends Command {
    readonly pacienteId: string;
    readonly embarazada: boolean;
    constructor(props: CommandProps<UpdatePacienteEmbarazadaCommand>);
}
