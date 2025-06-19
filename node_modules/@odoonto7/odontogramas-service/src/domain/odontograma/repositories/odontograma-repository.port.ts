import { RepositoryPort } from '@odoonto7/shared';
import { OdontogramaEntity } from '../entities/odontograma.entity';

export interface OdontogramaRepositoryPort
  extends RepositoryPort<OdontogramaEntity> {
  findByPacienteId(pacienteId: string): Promise<OdontogramaEntity | null>;
}
