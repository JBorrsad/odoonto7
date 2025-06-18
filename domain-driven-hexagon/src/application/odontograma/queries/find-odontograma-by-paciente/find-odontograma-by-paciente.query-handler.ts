import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Ok, Result } from 'oxide.ts';
import { Query } from '@src/shared/ddd';
import { OdontogramaEntity } from '@src/domain/odontograma/odontograma.entity';
import { OdontogramaRepositoryPort } from '@src/infrastructure/database/odontograma/odontograma.repository.port';
import { ODONTOGRAMA_REPOSITORY } from '@src/config/modules/odontograma.di-tokens';

export class FindOdontogramaByPacienteQuery extends Query {
  readonly pacienteId: string;

  constructor(props: { pacienteId: string }) {
    super();
    this.pacienteId = props.pacienteId;
  }
}

@QueryHandler(FindOdontogramaByPacienteQuery)
export class FindOdontogramaByPacienteQueryHandler implements IQueryHandler<FindOdontogramaByPacienteQuery> {
  constructor(
    @Inject(ODONTOGRAMA_REPOSITORY)
    private readonly odontogramaRepository: OdontogramaRepositoryPort,
  ) {}

  async execute(query: FindOdontogramaByPacienteQuery): Promise<Result<OdontogramaEntity | null, never>> {
    const odontograma = await this.odontogramaRepository.findById(query.pacienteId);
    return Ok(odontograma);
  }
} 