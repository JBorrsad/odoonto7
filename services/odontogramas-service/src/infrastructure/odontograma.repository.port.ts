import { RepositoryPort } from '@odoonto7/shared';
import { OdontogramaEntity } from '@src/domain/odontogramas';

export interface OdontogramaRepositoryPort
  extends RepositoryPort<OdontogramaEntity> {
  findByPacienteId(pacienteId: string): Promise<OdontogramaEntity | null>;
}
