import { Command, CommandProps } from '@odoonto7/shared';
export declare class UpdatePacienteHemorragiasCommand extends Command {
    readonly pacienteId: string;
    readonly hemorragiasDentales: boolean;
    constructor(props: CommandProps<UpdatePacienteHemorragiasCommand>);
}
