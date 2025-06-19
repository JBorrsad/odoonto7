import { PaginatedQueryParams, RepositoryPort } from '@odoonto7/shared';
import { OdontogramaEntity } from '../domain/odontograma';

export interface FindOdontogramasParams extends PaginatedQueryParams {
  readonly pacienteId?: string;
  readonly tipoDentadura?: string;
}

export interface OdontogramaRepositoryPort extends RepositoryPort<OdontogramaEntity> {
  findOneByPacienteId(pacienteId: string): Promise<OdontogramaEntity | null>;
}
