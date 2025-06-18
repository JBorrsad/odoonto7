import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Err, Ok, Result } from 'oxide.ts';
import { CreateOdontogramaCommand } from './create-odontograma.command';
import { OdontogramaEntity } from '@src/domain/odontograma/odontograma.entity';
import { OdontogramaRepositoryPort } from '@src/infrastructure/database/odontograma/odontograma.repository.port';
import { OdontogramaAlreadyExistsError } from '@src/domain/odontograma/odontograma.errors';
import { ODONTOGRAMA_REPOSITORY } from '@src/config/modules/odontograma.di-tokens';

@CommandHandler(CreateOdontogramaCommand)
export class CreateOdontogramaService implements ICommandHandler<CreateOdontogramaCommand> {
  constructor(
    @Inject(ODONTOGRAMA_REPOSITORY)
    private readonly odontogramaRepository: OdontogramaRepositoryPort,
  ) {}

  async execute(command: CreateOdontogramaCommand): Promise<Result<string, OdontogramaAlreadyExistsError>> {
    const existingOdontograma = await this.odontogramaRepository.findById(command.pacienteId);
    
    if (existingOdontograma) {
      return Err(new OdontogramaAlreadyExistsError());
    }

    const odontograma = OdontogramaEntity.create({
      id: command.pacienteId,
      tipoDentadura: command.tipoDentadura,
    });

    await this.odontogramaRepository.insert(odontograma);

    return Ok(odontograma.id);
  }
} 