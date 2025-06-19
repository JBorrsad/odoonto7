import { Command, CommandProps } from '@odoonto7/shared';
import { Sexo } from '../../../../domain/paciente';
export declare class UpdatePacienteDatosCommand extends Command {
    readonly pacienteId: string;
    readonly nombre?: string;
    readonly apellidos?: string;
    readonly edad?: number;
    readonly sexo?: Sexo;
    constructor(props: CommandProps<UpdatePacienteDatosCommand>);
}
