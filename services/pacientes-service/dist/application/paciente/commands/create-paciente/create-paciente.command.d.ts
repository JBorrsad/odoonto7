import { Command, CommandProps } from '@odoonto7/shared';
import { Sexo } from '../../../../domain/paciente';
export declare class CreatePacienteCommand extends Command {
    readonly nombre: string;
    readonly apellidos: string;
    readonly edad: number;
    readonly sexo: Sexo;
    readonly telefono?: string;
    readonly email?: string;
    readonly alergias?: string;
    readonly notas?: string;
    readonly medicacion?: string;
    readonly patologiasMedicas?: string;
    readonly embarazada?: boolean;
    readonly hemorragiasDentales?: boolean;
    readonly country: string;
    readonly postalCode: string;
    readonly street: string;
    constructor(props: CommandProps<CreatePacienteCommand>);
}
