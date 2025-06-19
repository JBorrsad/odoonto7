import { Command, CommandProps } from '@odoonto7/shared';
export declare class UpdatePacienteMedicacionCommand extends Command {
    readonly pacienteId: string;
    readonly medicacion: string;
    constructor(props: CommandProps<UpdatePacienteMedicacionCommand>);
}
