import { PaginatedQueryParams, RepositoryPort } from '@odoonto7/shared';
import { PacienteEntity, Sexo } from '../../domain/paciente';

export interface FindPacientesParams extends PaginatedQueryParams {
  country?: string;
  postalCode?: string;
  street?: string;
  email?: string;
  nombre?: string;
  apellidos?: string;
  edad?: number;
  sexo?: Sexo;
}

export interface PacienteRepositoryPort extends RepositoryPort<PacienteEntity> {
  findWithFilters(params: FindPacientesParams): Promise<PacienteEntity[]>;
}

