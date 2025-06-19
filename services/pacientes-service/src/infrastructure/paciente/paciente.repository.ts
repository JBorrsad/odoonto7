import { InjectPool } from 'nestjs-slonik';
import { DatabasePool, sql } from 'slonik';
import { PacienteRepositoryPort, FindPacientesParams } from './paciente.repository.port';
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

  async findWithFilters(params: FindPacientesParams): Promise<PacienteEntity[]> {
    const conditions = [];
    const values: any = {};

    if (params.nombre) {
      conditions.push(sql`nombre ILIKE ${`%${params.nombre}%`}`);
    }

    if (params.apellidos) {
      conditions.push(sql`apellidos ILIKE ${`%${params.apellidos}%`}`);
    }

    if (params.email) {
      conditions.push(sql`email ILIKE ${`%${params.email}%`}`);
    }

    if (params.country) {
      conditions.push(sql`country = ${params.country}`);
    }

    if (params.postalCode) {
      conditions.push(sql`postal_code = ${params.postalCode}`);
    }

    if (params.street) {
      conditions.push(sql`street ILIKE ${`%${params.street}%`}`);
    }

    let query = sql`
      SELECT * FROM ${sql.identifier([this.tableName])}
    `;

    if (conditions.length > 0) {
      query = sql`${query} WHERE ${sql.join(conditions, sql` AND `)}`;
    }

    query = sql`${query} ORDER BY created_at DESC`;

    if (params.limit) {
      query = sql`${query} LIMIT ${params.limit}`;
    }

    if (params.offset) {
      query = sql`${query} OFFSET ${params.offset}`;
    }

    const records = await this.pool.query(query);
    
    return records.rows.map((row) => {
      const model = this.schema.parse(row);
      return this.mapper.toDomain(model);
    });
  }
}

