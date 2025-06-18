import { PacienteRepositoryPort } from '@src/infrastructure/database/paciente/paciente.repository.port';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Err, Ok, Result } from 'oxide.ts';
import { UpdatePacienteEmbarazadaCommand } from './update-paciente-embarazada.command';
import { AggregateID } from '@src/shared/ddd';
import { Inject } from '@nestjs/common';
import { PACIENTE_REPOSITORY } from '@src/config/modules/paciente.di-tokens';
import { NotFoundException } from '@src/shared/exceptions';

@CommandHandler(UpdatePacienteEmbarazadaCommand)
export class UpdatePacienteEmbarazadaService
  implements ICommandHandler<UpdatePacienteEmbarazadaCommand>
{
  constructor(
    @Inject(PACIENTE_REPOSITORY)
    protected readonly pacienteRepo: PacienteRepositoryPort,
  ) {}

  async execute(
    command: UpdatePacienteEmbarazadaCommand,
  ): Promise<Result<AggregateID, NotFoundException>> {
    const found = await this.pacienteRepo.findOneById(command.pacienteId);
    if (found.isNone()) return Err(new NotFoundException());

    const paciente = found.unwrap();

    paciente.updateEmbarazada({
      embarazada: command.embarazada,
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