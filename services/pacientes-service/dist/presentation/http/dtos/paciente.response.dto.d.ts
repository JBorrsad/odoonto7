import { ResponseBase } from '@odoonto7/shared';
import { Sexo } from '../../../domain/paciente';
export declare class PacienteResponseDto extends ResponseBase {
    nombre: string;
    apellidos: string;
    edad: number;
    sexo: Sexo;
    telefono?: string;
    email?: string;
    country: string;
    postalCode: string;
    street: string;
    alergias?: string[];
    notas?: string;
    medicacion?: string[];
    patologiasMedicas?: string[];
    embarazada?: boolean;
    hemorragiasDentales?: boolean;
}
