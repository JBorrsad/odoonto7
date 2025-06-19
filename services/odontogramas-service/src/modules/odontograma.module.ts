import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

// Commands
import { CreateOdontogramaCommandHandler } from '../application/commands/create-odontograma/create-odontograma.command-handler';
import { AgregarLesionCommandHandler } from '../application/commands/agregar-lesion/agregar-lesion.command-handler';
import { AgregarTratamientoCommandHandler } from '../application/commands/agregar-tratamiento/agregar-tratamiento.command-handler';

// Queries
import { FindOdontogramaByPacienteQueryHandler } from '../application/queries/find-odontograma-by-paciente/find-odontograma-by-paciente.query-handler';

// Event Handlers
// Comentado hasta implementar comunicación entre microservicios
// import { CreateOdontogramaWhenPacienteIsCreatedDomainEventHandler } from '../application/event-handlers/create-odontograma-when-paciente-is-created.domain-event-handler';

// Infrastructure
import { OdontogramaRepository } from '../infrastructure/odontograma.repository';
import { OdontogramaMapper } from '../infrastructure/odontograma.mapper';

// Tokens
import { ODONTOGRAMA_REPOSITORY } from '../application/odontograma.tokens';

const commandHandlers = [
  CreateOdontogramaCommandHandler,
  AgregarLesionCommandHandler,
  AgregarTratamientoCommandHandler,
];

const queryHandlers = [FindOdontogramaByPacienteQueryHandler];

const eventHandlers = [
  // CreateOdontogramaWhenPacienteIsCreatedDomainEventHandler // Comentado hasta implementar comunicación entre microservicios
];

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
