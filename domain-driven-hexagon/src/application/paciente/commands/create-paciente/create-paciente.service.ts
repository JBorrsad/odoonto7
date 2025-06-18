import { PacienteRepositoryPort } from '@src/infrastructure/database/paciente/paciente.repository.port';
import { Address } from '@src/domain/paciente/value-objects/address.value-object';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Err, Ok, Result } from 'oxide.ts';
import { CreatePacienteCommand } from './create-paciente.command';
import { PacienteAlreadyExistsError } from '@src/domain/paciente/paciente.errors';
import { AggregateID } from '@src/shared/ddd';
import { PacienteEntity } from '@src/domain/paciente/paciente.entity';
import { ConflictException } from '@src/shared/exceptions';
import { Inject } from '@nestjs/common';
import { PACIENTE_REPOSITORY } from '@src/config/modules/paciente.di-tokens';

@CommandHandler(CreatePacienteCommand)
export class CreatePacienteService
  implements ICommandHandler<CreatePacienteCommand>
{
  constructor(
    @Inject(PACIENTE_REPOSITORY)
    protected readonly pacienteRepo: PacienteRepositoryPort,
  ) {}

  async execute(
    command: CreatePacienteCommand,
  ): Promise<Result<AggregateID, PacienteAlreadyExistsError>> {
    const paciente = PacienteEntity.create({
      nombre: command.nombre,
      apellidos: command.apellidos,
      edad: command.edad,
      sexo: command.sexo,
      telefono: command.telefono,
      email: command.email,
      alergias: command.alergias,
      notas: command.notas,
      address: new Address({
        country: command.country,
        postalCode: command.postalCode,
        street: command.street,
      }),
    });

    try {
      /* Wrapping operation in a transaction to make sure
         that all domain events are processed atomically */
      await this.pacienteRepo.transaction(async () =>
        this.pacienteRepo.insert(paciente),
      );
      return Ok(paciente.id);
    } catch (error: any) {
      if (error instanceof ConflictException) {
        return Err(new PacienteAlreadyExistsError(error));
      }
      throw error;
    }
  }
}
