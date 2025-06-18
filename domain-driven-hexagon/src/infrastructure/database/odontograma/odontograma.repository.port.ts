import { RepositoryPort } from '@src/shared/ddd';
import { OdontogramaEntity } from '@src/domain/odontograma/odontograma.entity';

export interface OdontogramaRepositoryPort
  extends RepositoryPort<OdontogramaEntity> {
  findByPacienteId(pacienteId: string): Promise<OdontogramaEntity | null>;
}
