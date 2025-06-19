import { PacienteRepositoryPort } from '../../../../infrastructure/paciente/paciente.repository.port';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Err, Ok, Result } from 'oxide.ts';
import { UpdatePacienteAddressCommand } from './update-paciente-address.command';
import { AggregateID } from '@odoonto7/shared';
import { Inject } from '@nestjs/common';
import { PACIENTE_REPOSITORY } from '../../../../config/modules/paciente.di-tokens';
import { NotFoundException } from '@odoonto7/shared';

@CommandHandler(UpdatePacienteAddressCommand)
export class UpdatePacienteAddressService
  implements ICommandHandler<UpdatePacienteAddressCommand>
{
  constructor(
    @Inject(PACIENTE_REPOSITORY)
    protected readonly pacienteRepo: PacienteRepositoryPort,
  ) {}

  async execute(
    command: UpdatePacienteAddressCommand,
  ): Promise<Result<AggregateID, NotFoundException>> {
    const found = await this.pacienteRepo.findOneById(command.pacienteId);
    if (found.isNone()) return Err(new NotFoundException());

    const paciente = found.unwrap();

    paciente.updateAddress({
      country: command.country,
      postalCode: command.postalCode,
      street: command.street,
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



