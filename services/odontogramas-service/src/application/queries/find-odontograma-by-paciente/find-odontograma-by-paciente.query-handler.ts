import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Ok, Result } from 'oxide.ts';
import { QueryBase } from '@odoonto7/shared';
import { OdontogramaEntity } from '../../../domain/odontograma';
import { OdontogramaRepositoryPort } from '../../../infrastructure/odontograma.repository.port';
import { ODONTOGRAMA_REPOSITORY } from '../../odontograma.tokens';

export class FindOdontogramaByPacienteQuery extends QueryBase {
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
    const odontogramaResult = await this.odontogramaRepository.findOneById(query.pacienteId);
    
    if (odontogramaResult.isNone()) {
      return Ok(null);
    }
    
    const odontograma = odontogramaResult.unwrap();
    return Ok(odontograma);
  }
} 
