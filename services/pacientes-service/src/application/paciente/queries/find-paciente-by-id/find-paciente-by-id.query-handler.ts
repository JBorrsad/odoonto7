import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Ok, Err, Result } from 'oxide.ts';
import { QueryBase } from '@odoonto7/shared';
import { Inject } from '@nestjs/common';
import { PacienteRepositoryPort } from '../../../../infrastructure/paciente/paciente.repository.port';
import { PACIENTE_REPOSITORY } from '../../../../config/modules/paciente.di-tokens';
import { PacienteEntity } from '../../../../domain/paciente';
import { NotFoundException } from '@odoonto7/shared';

export class FindPacienteByIdQuery extends QueryBase {
  readonly pacienteId: string;

  constructor(props: { pacienteId: string }) {
    super();
    this.pacienteId = props.pacienteId;
  }
}

@QueryHandler(FindPacienteByIdQuery)
export class FindPacienteByIdQueryHandler
  implements IQueryHandler<FindPacienteByIdQuery>
{
  constructor(
    @Inject(PACIENTE_REPOSITORY)
    private readonly repository: PacienteRepositoryPort,
  ) {}

  async execute(
    query: FindPacienteByIdQuery,
  ): Promise<Result<PacienteEntity, NotFoundException>> {
    const found = await this.repository.findOneById(query.pacienteId);
    
    if (found.isNone()) {
      return Err(new NotFoundException('Paciente not found'));
    }
    
    return Ok(found.unwrap());
  }
} 