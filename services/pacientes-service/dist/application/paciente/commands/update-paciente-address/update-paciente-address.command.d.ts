import { Command, CommandProps } from '@odoonto7/shared';
export declare class UpdatePacienteAddressCommand extends Command {
    readonly pacienteId: string;
    readonly country?: string;
    readonly postalCode?: string;
    readonly street?: string;
    constructor(props: CommandProps<UpdatePacienteAddressCommand>);
}
