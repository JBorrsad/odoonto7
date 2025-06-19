import { PaginatedQueryParams, RepositoryPort } from '@odoonto7/shared';
import { PacienteEntity } from '@src/domain/pacientes';

export interface FindPacientesParams extends PaginatedQueryParams {
  readonly nombre?: string;
  readonly apellidos?: string;
  readonly telefono?: string;
  readonly email?: string;
}

export interface PacienteRepositoryPort extends RepositoryPort<PacienteEntity> {
  findOneByEmail(email: string): Promise<PacienteEntity | null>;
  findOneByTelefono(telefono: string): Promise<PacienteEntity | null>;
}
