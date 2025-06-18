import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Ok, Result } from 'oxide.ts';
import { PaginatedParams, PaginatedQueryBase } from '@src/shared/ddd/query.base';
import { Paginated } from '@src/shared/ddd';
import { InjectPool } from 'nestjs-slonik';
import { DatabasePool, sql } from 'slonik';
import {
  PacienteModel,
  pacienteSchema,
} from '@src/infrastructure/database/paciente/paciente.repository';

export class FindPacientesQuery extends PaginatedQueryBase {
  readonly country?: string;
  readonly postalCode?: string;
  readonly street?: string;
  readonly email?: string;
  readonly nombre?: string;
  readonly apellidos?: string;

  constructor(props: PaginatedParams<FindPacientesQuery>) {
    super(props);
    this.country = props.country;
    this.postalCode = props.postalCode;
    this.street = props.street;
    this.email = props.email;
    this.nombre = props.nombre;
    this.apellidos = props.apellidos;
  }
}

@QueryHandler(FindPacientesQuery)
export class FindPacientesQueryHandler
  implements IQueryHandler<FindPacientesQuery>
{
  constructor(
    @InjectPool()
    private readonly pool: DatabasePool,
  ) {}

  async execute(
    query: FindPacientesQuery,
  ): Promise<Result<Paginated<PacienteModel>, Error>> {
    const statement = sql.type(pacienteSchema)`
         SELECT *
         FROM pacientes
         WHERE
           ${query.country ? sql`country = ${query.country}` : true} AND
           ${query.street ? sql`street = ${query.street}` : true} AND
           ${
             query.postalCode ? sql`"postalCode" = ${query.postalCode}` : true
           } AND
           ${query.email ? sql`email = ${query.email}` : true} AND
           ${query.nombre ? sql`nombre ILIKE ${`%${query.nombre}%`}` : true} AND
           ${
             query.apellidos
               ? sql`apellidos ILIKE ${`%${query.apellidos}%`}`
               : true
           }
         LIMIT ${query.limit}
         OFFSET ${query.offset}`;

    const records = await this.pool.query(statement);

    return Ok(
      new Paginated({
        data: records.rows,
        count: records.rowCount,
        limit: query.limit,
        page: query.page,
      }),
    );
  }
}
