import { Inject, Injectable } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AgregarTratamientoCommand } from './agregar-tratamiento.command';
import { OdontogramaRepositoryPort } from '@src/infrastructure/database/odontograma/odontograma.repository.port';
import { ODONTOGRAMA_REPOSITORY } from '@src/config/modules/odontograma.di-tokens';
import { CaraDiente, TipoTratamiento, OdontogramaNotFoundError } from '@src/domain/odontogramas';

@Injectable()
@CommandHandler(AgregarTratamientoCommand)
export class AgregarTratamientoService
  implements ICommandHandler<AgregarTratamientoCommand>
{
  constructor(
    @Inject(ODONTOGRAMA_REPOSITORY)
    private readonly odontogramaRepository: OdontogramaRepositoryPort,
  ) {}

  async execute(command: AgregarTratamientoCommand): Promise<void> {
    const odontograma = await this.odontogramaRepository.findByPacienteId(
      command.pacienteId,
    );

    if (!odontograma) {
      throw new OdontogramaNotFoundError();
    }

    odontograma.agregarTratamiento(
      command.numeroDiente,
      command.cara as CaraDiente,
      command.tipo as TipoTratamiento,
      command.descripcion,
    );

    await this.odontogramaRepository.insert(odontograma);
  }
} 