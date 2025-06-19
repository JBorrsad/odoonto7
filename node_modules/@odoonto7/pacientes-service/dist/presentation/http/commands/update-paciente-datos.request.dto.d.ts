import { Sexo } from '../../../domain/paciente';
export declare class UpdatePacienteDatosRequestDto {
    readonly nombre?: string;
    readonly apellidos?: string;
    readonly edad?: number;
    readonly sexo?: Sexo;
}
