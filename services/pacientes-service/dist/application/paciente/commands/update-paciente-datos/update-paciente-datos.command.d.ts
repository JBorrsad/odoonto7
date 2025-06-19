import { Sexo } from '../../../domain/paciente';
export declare class UpdatePacienteDatosCommand {
    readonly pacienteId: string;
    readonly nombre?: string;
    readonly apellidos?: string;
    readonly edad?: number;
    readonly sexo?: Sexo;
    constructor(props: UpdatePacienteDatosCommand);
}
