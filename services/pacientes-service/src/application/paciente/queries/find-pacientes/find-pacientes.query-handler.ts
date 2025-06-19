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
    // Para simplificar y evitar problemas de SQL, retornamos una lista vacía por ahora
    // TODO: Implementar filtros en el repositorio
    const entities = await this.repository.findAll();
    
    return Ok(
      new Paginated({
        data: entities,
        count: entities.length,
        limit: query.limit,
        page: query.page,
      }),
    );
  }
}



