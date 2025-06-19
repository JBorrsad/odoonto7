import { PacienteRepositoryPort } from '@src/infrastructure/database/paciente/paciente.repository.port';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Err, Ok, Result } from 'oxide.ts';
import { UpdatePacientePatologiasCommand } from './update-paciente-patologias.command';
import { AggregateID } from '@odoonto7/shared';
import { Inject } from '@nestjs/common';
import { PACIENTE_REPOSITORY } from '@src/config/modules/paciente.di-tokens';
import { NotFoundException } from '@odoonto7/shared';

@CommandHandler(UpdatePacientePatologiasCommand)
export class UpdatePacientePatologiasService
  implements ICommandHandler<UpdatePacientePatologiasCommand>
{
  constructor(
    @Inject(PACIENTE_REPOSITORY)
    protected readonly pacienteRepo: PacienteRepositoryPort,
  ) {}

  async execute(
    command: UpdatePacientePatologiasCommand,
  ): Promise<Result<AggregateID, NotFoundException>> {
    const found = await this.pacienteRepo.findOneById(command.pacienteId);
    if (found.isNone()) return Err(new NotFoundException());

    const paciente = found.unwrap();

    paciente.updatePatologias({
      patologiasMedicas: command.patologiasMedicas,
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
