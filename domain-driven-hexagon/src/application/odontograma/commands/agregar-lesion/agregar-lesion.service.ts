import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Err, Ok, Result } from 'oxide.ts';
import { AgregarLesionCommand } from './agregar-lesion.command';
import { OdontogramaRepositoryPort } from '@src/infrastructure/database/odontograma/odontograma.repository.port';
import { OdontogramaNotFoundError } from '@src/domain/odontograma/odontograma.errors';
import { ODONTOGRAMA_REPOSITORY } from '@src/config/modules/odontograma.di-tokens';

@CommandHandler(AgregarLesionCommand)
export class AgregarLesionService implements ICommandHandler<AgregarLesionCommand> {
  constructor(
    @Inject(ODONTOGRAMA_REPOSITORY)
    private readonly odontogramaRepository: OdontogramaRepositoryPort,
  ) {}

  async execute(command: AgregarLesionCommand): Promise<Result<void, OdontogramaNotFoundError>> {
    const odontograma = await this.odontogramaRepository.findById(command.odontogramaId);
    
    if (!odontograma) {
      return Err(new OdontogramaNotFoundError());
    }

    odontograma.agregarLesion(
      command.numeroDiente,
      command.cara,
      command.tipo,
      command.descripcion,
    );

    await this.odontogramaRepository.update(odontograma);

    return Ok(undefined);
  }
} 