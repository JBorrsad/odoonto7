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
  address: Address;
  alergias: string;
  notas: string;
  medicacion: string;
  patologiasMedicas: string;
  embarazada?: boolean;
  hemorragiasDentales: boolean;
}

export interface CreatePacienteProps {
  id: string;
  nombre: string;
  apellidos: string;
  edad: number;
  sexo: Sexo;
  telefono: string;
  email: string;
  address: {
    street: string;
    postalCode: string;
    country: string;
  };
  alergias: string;
  notas: string;
  medicacion: string;
  patologiasMedicas: string;
  embarazada?: boolean;
  hemorragiasDentales: boolean;
}

export interface UpdatePacienteAddressProps {
  street?: string;
  postalCode?: string;
  country?: string;
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