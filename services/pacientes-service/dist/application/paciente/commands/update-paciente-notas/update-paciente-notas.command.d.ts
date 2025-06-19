import { Command, CommandProps } from '@odoonto7/shared';
export declare class UpdatePacienteNotasCommand extends Command {
    readonly pacienteId: string;
    readonly notas: string;
    constructor(props: CommandProps<UpdatePacienteNotasCommand>);
}
