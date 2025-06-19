import { PacienteRepositoryPort } from '@src/infrastructure/database/paciente/paciente.repository.port';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Err, Ok, Result } from 'oxide.ts';
import { UpdatePacienteNotasCommand } from './update-paciente-notas.command';
import { AggregateID } from '@odoonto7/shared';
import { Inject } from '@nestjs/common';
import { PACIENTE_REPOSITORY } from '@src/config/modules/paciente.di-tokens';
import { NotFoundException } from '@odoonto7/shared';

@CommandHandler(UpdatePacienteNotasCommand)
export class UpdatePacienteNotasService
  implements ICommandHandler<UpdatePacienteNotasCommand>
{
  constructor(
    @Inject(PACIENTE_REPOSITORY)
    protected readonly pacienteRepo: PacienteRepositoryPort,
  ) {}

  async execute(
    command: UpdatePacienteNotasCommand,
  ): Promise<Result<AggregateID, NotFoundException>> {
    const found = await this.pacienteRepo.findOneById(command.pacienteId);
    if (found.isNone()) return Err(new NotFoundException());

    const paciente = found.unwrap();

    paciente.updateNotas({
      notas: command.notas,
    });

    try {
      await this.pacienteRepo.transaction(async () =>
        this.pacienteRepo.insert(paciente),
      );
      return Ok(paciente.id);
    } catch (error: any) {
      throw error;
    }
  }
}
