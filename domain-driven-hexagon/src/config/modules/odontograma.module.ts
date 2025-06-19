import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateOdontogramaService } from '@src/application/odontograma/commands/create-odontograma/create-odontograma.service';
import { AgregarLesionService } from '@src/application/odontograma/commands/agregar-lesion/agregar-lesion.service';
import { AgregarTratamientoService } from '@src/application/odontograma/commands/agregar-tratamiento/agregar-tratamiento.service';
import { FindOdontogramaByPacienteQueryHandler } from '@src/application/odontograma/queries/find-odontograma-by-paciente/find-odontograma-by-paciente.query-handler';
import { CreateOdontogramaWhenPacienteIsCreatedDomainEventHandler } from '@src/application/odontograma/event-handlers/create-odontograma-when-paciente-is-created.domain-event-handler';
import { OdontogramaRepository } from '@src/infrastructure/database/odontograma/odontograma.repository';
import { ODONTOGRAMA_REPOSITORY } from './odontograma.di-tokens';

const commandHandlers = [
  CreateOdontogramaService,
  AgregarLesionService,
  AgregarTratamientoService,
];

const queryHandlers = [
  FindOdontogramaByPacienteQueryHandler,
];

const eventHandlers = [
  CreateOdontogramaWhenPacienteIsCreatedDomainEventHandler,
];

const repositories = [
  {
    provide: ODONTOGRAMA_REPOSITORY,
    useClass: OdontogramaRepository,
  },
];

@Module({
  imports: [CqrsModule],
  providers: [
    ...commandHandlers,
    ...queryHandlers,
    ...eventHandlers,
    ...repositories,
  ],
  exports: [
    ...repositories,
    CqrsModule,
  ],
})
export class OdontogramaModule {} 