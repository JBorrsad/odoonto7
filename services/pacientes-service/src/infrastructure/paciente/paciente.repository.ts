import { InjectPool } from 'nestjs-slonik';
import { DatabasePool } from 'slonik';
import { PacienteRepositoryPort } from './paciente.repository.port';
import { PacienteMapper } from './paciente.mapper';
import { PacienteEntity } from '../../domain/paciente';
import { SqlRepositoryBase } from '@odoonto7/shared';
import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PacienteModel, pacienteSchema } from './paciente.schema';

@Injectable()
export class PacienteRepository
  extends SqlRepositoryBase<PacienteEntity, PacienteModel>
  implements PacienteRepositoryPort
{
  protected tableName = 'pacientes';
  protected schema = pacienteSchema;

  constructor(
    @InjectPool()
    pool: DatabasePool,
    mapper: PacienteMapper,
    eventEmitter: EventEmitter2,
  ) {
    super(pool, mapper, eventEmitter, new Logger(PacienteRepository.name));
  }
}

