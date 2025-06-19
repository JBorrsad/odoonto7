import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Ok, Result } from 'oxide.ts';
import { PaginatedParams, PaginatedQueryBase } from '@odoonto7/shared';
import { Paginated } from '@odoonto7/shared';
import { Inject } from '@nestjs/common';
import { PacienteRepositoryPort } from '../../../../infrastructure/paciente/paciente.repository.port';
import { PACIENTE_REPOSITORY } from '../../../../config/modules/paciente.di-tokens';
import { PacienteEntity } from '../../../../domain/paciente';

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
    @Inject(PACIENTE_REPOSITORY)
    private readonly repository: PacienteRepositoryPort,
  ) {}

  async execute(
    query: FindPacientesQuery,
  ): Promise<Result<Paginated<PacienteEntity>, Error>> {
    try {
      const entities = await this.repository.findWithFilters({
        limit: query.limit,
        offset: query.offset,
        page: query.page,
        orderBy: query.orderBy,
        country: query.country,
        postalCode: query.postalCode,
        street: query.street,
        email: query.email,
        nombre: query.nombre,
        apellidos: query.apellidos,
      });
      
      return Ok(
        new Paginated({
          data: entities,
          count: entities.length,
          limit: query.limit,
          page: query.page,
        }),
      );
    } catch (error) {
      return Ok(
        new Paginated({
          data: [],
          count: 0,
          limit: query.limit,
          page: query.page,
        }),
      );
    }
  }
}



