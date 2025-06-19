import { RepositoryPort } from '@src/shared/ddd';
import { OdontogramaEntity } from '@src/domain/odontogramas';

export interface OdontogramaRepositoryPort
  extends RepositoryPort<OdontogramaEntity> {
  findByPacienteId(pacienteId: string): Promise<OdontogramaEntity | null>;
}
