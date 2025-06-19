import { Injectable, Logger } from '@nestjs/common';
import { InjectPool } from 'nestjs-slonik';
import { DatabasePool, sql } from 'slonik';
import { SqlRepositoryBase } from '@odoonto7/shared';
import { OdontogramaEntity } from '../domain/odontograma';
import { OdontogramaRepositoryPort } from './odontograma.repository.port';
import { OdontogramaMapper } from './odontograma.mapper';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { OdontogramaModel, odontogramaSchema } from './odontograma.schema';

@Injectable()
export class OdontogramaRepository
  extends SqlRepositoryBase<OdontogramaEntity, OdontogramaModel>
  implements OdontogramaRepositoryPort
{
  protected tableName = 'odontogramas';
  protected schema = odontogramaSchema;

  constructor(
    @InjectPool()
    pool: DatabasePool,
    mapper: OdontogramaMapper,
    eventEmitter: EventEmitter2,
  ) {
    super(pool, mapper, eventEmitter, new Logger(OdontogramaRepository.name));
  }

  async findOneByPacienteId(pacienteId: string): Promise<OdontogramaEntity | null> {
    // TODO: Implementar cuando se resuelvan problemas de slonik
    return null;
  }

  async findByPacienteId(
    pacienteId: string,
  ): Promise<OdontogramaEntity | null> {
    try {
      const odontograma = await this.pool.one(
        sql`SELECT * FROM "odontogramas" WHERE id = ${pacienteId}`,
      );
      return this.mapper.toDomain(odontograma as any);
    } catch (error) {
      return null;
    }
  }
}
