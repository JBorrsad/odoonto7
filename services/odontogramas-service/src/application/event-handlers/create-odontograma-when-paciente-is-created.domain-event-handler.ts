// NOTA: Este evento debería venir a través de un message broker (RabbitMQ, Kafka, etc.)
// Por ahora comentado hasta implementar comunicación entre microservicios
// import { PacienteCreatedDomainEvent } from '@pacientes-service/domain/paciente';
import { OdontogramaRepositoryPort } from '../../infrastructure/odontograma.repository.port';
import { OdontogramaEntity, TipoDentadura } from '../../domain/odontograma';
import { OnEvent } from '@nestjs/event-emitter';
import { Inject, Injectable } from '@nestjs/common';
import { ODONTOGRAMA_REPOSITORY } from '../odontograma.tokens';

@Injectable()
export class CreateOdontogramaWhenPacienteIsCreatedDomainEventHandler {
  constructor(
    @Inject(ODONTOGRAMA_REPOSITORY)
    private readonly odontogramaRepo: OdontogramaRepositoryPort,
  ) {}

  // Handle a Domain Event by performing changes to other aggregates (inside the same Domain).
  // @OnEvent(PacienteCreatedDomainEvent.name, { async: true, promisify: true })
  // async handle(event: PacienteCreatedDomainEvent): Promise<any> {
    // const odontograma = OdontogramaEntity.create({
    //   id: event.aggregateId, // Usar el mismo ID del paciente
    //   tipoDentadura: TipoDentadura.DEFINITIVA, // Valor por defecto
    // });
    // return this.odontogramaRepo.insert(odontograma);
  // }
}
