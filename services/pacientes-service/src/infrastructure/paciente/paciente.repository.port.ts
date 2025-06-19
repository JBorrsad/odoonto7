import { PaginatedQueryParams, RepositoryPort } from '@odoonto7/shared';
import { PacienteEntity } from '../../domain/paciente';

export interface FindPacientesParams extends PaginatedQueryParams {
}

export interface PacienteRepositoryPort extends RepositoryPort<PacienteEntity> {
}

