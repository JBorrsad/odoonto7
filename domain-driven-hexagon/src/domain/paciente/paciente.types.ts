import { Address } from './value-objects/address.value-object';

export enum Sexo {
  HOMBRE = 'Hombre',
  MUJER = 'Mujer',
}

export interface PacienteProps {
  nombre: string;
  apellidos: string;
  edad: number;
  sexo: Sexo;
  telefono: string;
  email: string;
  alergias: string;
  notas: string;
  medicacion: string;
  patologiasMedicas: string;
  embarazada?: boolean;
  hemorragiasDentales: boolean;
  address: Address;
}

export interface CreatePacienteProps {
  nombre: string;
  apellidos: string;
  edad: number;
  sexo: Sexo;
  telefono: string;
  email: string;
  alergias: string;
  notas: string;
  medicacion: string;
  patologiasMedicas: string;
  embarazada?: boolean;
  hemorragiasDentales: boolean;
  address: Address;
}

export interface UpdatePacienteAddressProps {
  country?: string;
  postalCode?: string;
  street?: string;
}

export interface UpdatePacienteContactoProps {
  telefono?: string;
  email?: string;
}

export interface UpdatePacienteDatosProps {
  nombre?: string;
  apellidos?: string;
  edad?: number;
  sexo?: Sexo;
}

export interface UpdatePacienteAlergiasProps {
  alergias: string;
}

export interface UpdatePacienteNotasProps {
  notas: string;
}

export interface UpdatePacienteMedicacionProps {
  medicacion: string;
}

export interface UpdatePacientePatologiasProps {
  patologiasMedicas: string;
}

export interface UpdatePacienteEmbarazadaProps {
  embarazada: boolean;
}

export interface UpdatePacienteHemorragiasProps {
  hemorragiasDentales: boolean;
}
