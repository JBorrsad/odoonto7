import { Injectable, Logger } from '@nestjs/common';
import { InjectPool } from 'nestjs-slonik';
import { DatabasePool, sql } from 'slonik';
import { SqlRepositoryBase } from '@src/shared/db/sql-repository.base';
import { OdontogramaEntity } from '@src/domain/odontogramas';
import { OdontogramaRepositoryPort } from './odontograma.repository.port';
import { OdontogramaMapper } from './odontograma.mapper';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { z } from 'zod';

export const odontogramaSchema = z.object({
  id: z.string().uuid(),
  tipo_dentadura: z.string(),
  dientes_data: z.any(),
  created_at: z.preprocess((val: any) => new Date(val), z.date()),
  updated_at: z.preprocess((val: any) => new Date(val), z.date()),
});

export type OdontogramaModel = z.TypeOf<typeof odontogramaSchema>;

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
