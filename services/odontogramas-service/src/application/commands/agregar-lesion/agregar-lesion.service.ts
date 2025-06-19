import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Err, Ok, Result } from 'oxide.ts';
import { AgregarLesionCommand } from './agregar-lesion.command';
import { OdontogramaRepositoryPort } from '../../../infrastructure/odontograma.repository.port';
import { OdontogramaNotFoundError } from '../../../domain/odontograma';
import { ODONTOGRAMA_REPOSITORY } from '../../odontograma.tokens';

@CommandHandler(AgregarLesionCommand)
export class AgregarLesionService implements ICommandHandler<AgregarLesionCommand> {
  constructor(
    @Inject(ODONTOGRAMA_REPOSITORY)
    private readonly odontogramaRepository: OdontogramaRepositoryPort,
  ) {}

  async execute(command: AgregarLesionCommand): Promise<Result<void, OdontogramaNotFoundError>> {
    const odontogramaResult = await this.odontogramaRepository.findOneById(command.odontogramaId);
    
    if (odontogramaResult.isNone()) {
      return Err(new OdontogramaNotFoundError());
    }
    
    const odontograma = odontogramaResult.unwrap();

    odontograma.agregarLesion(
      command.numeroDiente,
      command.cara,
      command.tipo,
      command.descripcion,
    );

    await this.odontogramaRepository.insert(odontograma);

    return Ok(undefined);
  }
} 
