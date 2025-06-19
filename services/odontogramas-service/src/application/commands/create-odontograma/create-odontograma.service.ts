import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Err, Ok, Result } from 'oxide.ts';
import { CreateOdontogramaCommand } from './create-odontograma.command';
import { OdontogramaEntity, OdontogramaAlreadyExistsError } from '../../../domain/odontograma';
import { OdontogramaRepositoryPort } from '../../../infrastructure/odontograma.repository.port';
import { ODONTOGRAMA_REPOSITORY } from '../../odontograma.tokens';

@CommandHandler(CreateOdontogramaCommand)
export class CreateOdontogramaService implements ICommandHandler<CreateOdontogramaCommand> {
  constructor(
    @Inject(ODONTOGRAMA_REPOSITORY)
    private readonly odontogramaRepository: OdontogramaRepositoryPort,
  ) {}

  async execute(command: CreateOdontogramaCommand): Promise<Result<string, OdontogramaAlreadyExistsError>> {
    const existingOdontogramaResult = await this.odontogramaRepository.findOneById(command.pacienteId);
    
    if (existingOdontogramaResult.isSome()) {
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
