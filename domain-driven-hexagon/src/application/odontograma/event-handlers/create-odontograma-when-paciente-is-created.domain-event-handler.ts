import { PacienteCreatedDomainEvent } from '@src/domain/paciente/events/paciente-created.domain-event';
import { OdontogramaRepositoryPort } from '@src/infrastructure/database/odontograma/odontograma.repository.port';
import { OdontogramaEntity } from '@src/domain/odontograma/odontograma.entity';
import { TipoDentadura } from '@src/domain/odontograma/odontograma.types';
import { OnEvent } from '@nestjs/event-emitter';
import { Inject, Injectable } from '@nestjs/common';
import { ODONTOGRAMA_REPOSITORY } from '@src/config/modules/odontograma.di-tokens';

@Injectable()
export class CreateOdontogramaWhenPacienteIsCreatedDomainEventHandler {
  constructor(
    @Inject(ODONTOGRAMA_REPOSITORY)
    private readonly odontogramaRepo: OdontogramaRepositoryPort,
  ) {}

  // Handle a Domain Event by performing changes to other aggregates (inside the same Domain).
  @OnEvent(PacienteCreatedDomainEvent.name, { async: true, promisify: true })
  async handle(event: PacienteCreatedDomainEvent): Promise<any> {
    const odontograma = OdontogramaEntity.create({
      id: event.aggregateId, // Usar el mismo ID del paciente
      tipoDentadura: TipoDentadura.DEFINITIVA, // Valor por defecto
    });
    return this.odontogramaRepo.insert(odontograma);
  }
}
