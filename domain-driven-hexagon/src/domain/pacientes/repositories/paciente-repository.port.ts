import { RepositoryPort } from '@src/shared/ddd';
import { PacienteEntity } from '../entities/paciente.entity';

export interface PacienteRepositoryPort extends RepositoryPort<PacienteEntity> {
  findByEmail(email: string): Promise<PacienteEntity | null>;
} 