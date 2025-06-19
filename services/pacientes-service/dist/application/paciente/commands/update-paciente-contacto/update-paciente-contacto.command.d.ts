import { Command, CommandProps } from '@odoonto7/shared';
export declare class UpdatePacienteContactoCommand extends Command {
    readonly pacienteId: string;
    readonly telefono?: string;
    readonly email?: string;
    constructor(props: CommandProps<UpdatePacienteContactoCommand>);
}
