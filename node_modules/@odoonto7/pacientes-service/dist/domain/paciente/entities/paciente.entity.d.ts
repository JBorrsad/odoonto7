import { AggregateRoot, AggregateID } from '@odoonto7/shared';
import { PacienteProps, CreatePacienteProps, UpdatePacienteAddressProps, UpdatePacienteContactoProps, UpdatePacienteDatosProps, UpdatePacienteAlergiasProps, UpdatePacienteNotasProps, UpdatePacienteMedicacionProps, UpdatePacientePatologiasProps, UpdatePacienteEmbarazadaProps, UpdatePacienteHemorragiasProps, Sexo } from '../types';
export declare class PacienteEntity extends AggregateRoot<PacienteProps> {
    protected readonly _id: AggregateID;
    static create(create: CreatePacienteProps): PacienteEntity;
    get nombre(): string;
    get apellidos(): string;
    get edad(): number;
    get sexo(): Sexo;
    get telefono(): string | undefined;
    get email(): string | undefined;
    get alergias(): string[] | undefined;
    get notas(): string | undefined;
    get medicacion(): string[] | undefined;
    get patologiasMedicas(): string[] | undefined;
    get embarazada(): boolean | undefined;
    get hemorragiasDentales(): boolean;
    delete(): void;
    updateAddress(props: UpdatePacienteAddressProps): void;
    updateContacto(props: UpdatePacienteContactoProps): void;
    updateDatos(props: UpdatePacienteDatosProps): void;
    updateAlergias(props: UpdatePacienteAlergiasProps): void;
    updateNotas(props: UpdatePacienteNotasProps): void;
    updateMedicacion(props: UpdatePacienteMedicacionProps): void;
    updatePatologias(props: UpdatePacientePatologiasProps): void;
    updateEmbarazada(props: UpdatePacienteEmbarazadaProps): void;
    updateHemorragias(props: UpdatePacienteHemorragiasProps): void;
    validate(): void;
}
