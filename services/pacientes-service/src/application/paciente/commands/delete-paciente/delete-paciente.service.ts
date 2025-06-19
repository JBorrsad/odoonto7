import { NotFoundException } from '@odoonto7/shared';
import { PacienteRepositoryPort } from '@src/infrastructure/database/paciente/paciente.repository.port';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Err, Ok, Result } from 'oxide.ts';
import { PACIENTE_REPOSITORY } from '@src/config/modules/paciente.di-tokens';
import { DeletePacienteCommand } from './delete-paciente.command';

@CommandHandler(DeletePacienteCommand)
export class DeletePacienteService
  implements ICommandHandler<DeletePacienteCommand>
{
  constructor(
    @Inject(PACIENTE_REPOSITORY)
    private readonly pacienteRepo: PacienteRepositoryPort,
  ) {}

  async execute(
    command: DeletePacienteCommand,
  ): Promise<Result<boolean, NotFoundException>> {
    const found = await this.pacienteRepo.findOneById(command.pacienteId);
    if (found.isNone()) return Err(new NotFoundException());
    const paciente = found.unwrap();
    paciente.delete();
    const result = await this.pacienteRepo.delete(paciente);
    return Ok(result);
  }
}
