import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

// Commands
import { CreateOdontogramaCommandHandler } from '../application/commands/create-odontograma/create-odontograma.command-handler';
import { AgregarLesionCommandHandler } from '../application/commands/agregar-lesion/agregar-lesion.command-handler';
import { AgregarTratamientoCommandHandler } from '../application/commands/agregar-tratamiento/agregar-tratamiento.command-handler';

// Queries
import { FindOdontogramaByPacienteQueryHandler } from '../application/queries/find-odontograma-by-paciente/find-odontograma-by-paciente.query-handler';

// Event Handlers
import { CreateOdontogramaWhenPacienteIsCreatedDomainEventHandler } from '../application/event-handlers/create-odontograma-when-paciente-is-created.domain-event-handler';

// Infrastructure
import { OdontogramaRepository } from '../infrastructure/odontograma.repository';
import { OdontogramaMapper } from '../infrastructure/odontograma.mapper';

// Tokens
export const ODONTOGRAMA_REPOSITORY = Symbol('ODONTOGRAMA_REPOSITORY');

const commandHandlers = [
  CreateOdontogramaCommandHandler,
  AgregarLesionCommandHandler,
  AgregarTratamientoCommandHandler,
];

const queryHandlers = [FindOdontogramaByPacienteQueryHandler];

const eventHandlers = [CreateOdontogramaWhenPacienteIsCreatedDomainEventHandler];

@Module({
  imports: [CqrsModule],
  providers: [
    ...commandHandlers,
    ...queryHandlers,
    ...eventHandlers,
    OdontogramaMapper,
    {
      provide: ODONTOGRAMA_REPOSITORY,
      useClass: OdontogramaRepository,
    },
  ],
})
export class OdontogramaModule {} 
