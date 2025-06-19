import { Command, CommandProps } from '@odoonto7/shared';
export declare class DeletePacienteCommand extends Command {
    readonly pacienteId: string;
    constructor(props: CommandProps<DeletePacienteCommand>);
}
