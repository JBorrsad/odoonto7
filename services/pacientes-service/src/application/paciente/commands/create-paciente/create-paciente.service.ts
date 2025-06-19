import { PacienteRepositoryPort } from '../../../../infrastructure/paciente/paciente.repository.port';
import { Address, PacienteAlreadyExistsError, PacienteEntity } from '../../../../domain/paciente';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Err, Ok, Result } from 'oxide.ts';
import { CreatePacienteCommand } from './create-paciente.command';
import { AggregateID } from '@odoonto7/shared';
import { ConflictException } from '@odoonto7/shared';
import { Inject } from '@nestjs/common';
import { PACIENTE_REPOSITORY } from '../../../../config/modules/paciente.di-tokens';
import { PacienteBusinessRulesValidator } from '../../validators/paciente-business-rules.validator';

@CommandHandler(CreatePacienteCommand)
export class CreatePacienteService
  implements ICommandHandler<CreatePacienteCommand>
{
  constructor(
    @Inject(PACIENTE_REPOSITORY)
    protected readonly pacienteRepo: PacienteRepositoryPort,
    private readonly validator: PacienteBusinessRulesValidator,
  ) {}

  async execute(
    command: CreatePacienteCommand,
  ): Promise<Result<AggregateID, PacienteAlreadyExistsError>> {
    try {
      // Validar reglas de negocio
      this.validator.validateCreatePaciente(command);

      const paciente = PacienteEntity.create({
        nombre: command.nombre,
        apellidos: command.apellidos,
        edad: command.edad,
        sexo: command.sexo,
        telefono: command.telefono,
        email: command.email,
        alergias: command.alergias,
        notas: command.notas,
        medicacion: command.medicacion,
        patologiasMedicas: command.patologiasMedicas,
        embarazada: command.embarazada,
        hemorragiasDentales: command.hemorragiasDentales,
        address: new Address({
          country: command.country,
          postalCode: command.postalCode,
          street: command.street,
        }),
      });

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



