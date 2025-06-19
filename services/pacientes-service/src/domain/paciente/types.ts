export type Sexo = 'M' | 'F' | 'O';

export interface AddressProps {
  street: string;
  postalCode: string;
  country: string;
}

export interface PacienteProps {
  nombre: string;
  apellidos: string;
  edad: number;
  sexo: Sexo;
  telefono?: string;
  email?: string;
  address: AddressProps;
  alergias?: string[];
  notas?: string;
  medicacion?: string[];
  patologiasMedicas?: string[];
  embarazada?: boolean;
  hemorragiasDentales?: boolean;
} 
