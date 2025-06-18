import { Address } from './value-objects/address.value-object';

export interface PacienteProps {
  nombre: string;
  apellidos: string;
  edad: number;
  sexo: string;
  telefono: string;
  email: string;
  alergias: string;
  notas: string;
  address: Address;
}

export interface CreatePacienteProps {
  nombre: string;
  apellidos: string;
  edad: number;
  sexo: string;
  telefono: string;
  email: string;
  alergias: string;
  notas: string;
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
  sexo?: string;
}

export interface UpdatePacienteAlergiasProps {
  alergias: string;
}

export interface UpdatePacienteNotasProps {
  notas: string;
}
