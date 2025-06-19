import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

// Command Services
import { CreatePacienteService } from '../application/paciente/commands/create-paciente/create-paciente.service';
import { DeletePacienteService } from '../application/paciente/commands/delete-paciente/delete-paciente.service';
import { UpdatePacienteAddressService } from '../application/paciente/commands/update-paciente-address/update-paciente-address.service';
import { UpdatePacienteContactoService } from '../application/paciente/commands/update-paciente-contacto/update-paciente-contacto.service';
import { UpdatePacienteDatosService } from '../application/paciente/commands/update-paciente-datos/update-paciente-datos.service';
import { UpdatePacienteAlergiasService } from '../application/paciente/commands/update-paciente-alergias/update-paciente-alergias.service';
import { UpdatePacienteNotasService } from '../application/paciente/commands/update-paciente-notas/update-paciente-notas.service';
import { UpdatePacienteMedicacionService } from '../application/paciente/commands/update-paciente-medicacion/update-paciente-medicacion.service';
import { UpdatePacientePatologiasService } from '../application/paciente/commands/update-paciente-patologias/update-paciente-patologias.service';
import { UpdatePacienteEmbarazadaService } from '../application/paciente/commands/update-paciente-embarazada/update-paciente-embarazada.service';
import { UpdatePacienteHemorragiasService } from '../application/paciente/commands/update-paciente-hemorragias/update-paciente-hemorragias.service';

// Query Handlers
import { FindPacientesQueryHandler } from '../application/paciente/queries/find-pacientes/find-pacientes.query-handler';
import { FindPacienteByIdQueryHandler } from '../application/paciente/queries/find-paciente-by-id/find-paciente-by-id.query-handler';

// Event Handlers
import { PacienteCreatedEventHandler } from '../application/paciente/event-handlers/paciente-created.event-handler';
import { PacienteUpdatedEventHandler } from '../application/paciente/event-handlers/paciente-updated.event-handler';

// Validators
import { PacienteBusinessRulesValidator } from '../application/paciente/validators/paciente-business-rules.validator';

// Controllers
import { CreatePacienteHttpController } from '../presentation/http/create-paciente.http.controller';
import { DeletePacienteHttpController } from '../presentation/http/delete-paciente.http-controller';
import { FindPacientesHttpController } from '../presentation/http/find-pacientes.http.controller';
import { FindPacienteByIdHttpController } from '../presentation/http/find-paciente-by-id.http.controller';
import { UpdatePacienteAddressHttpController } from '../presentation/http/update-paciente-address.http.controller';
import { UpdatePacienteAlergiasHttpController } from '../presentation/http/update-paciente-alergias.http.controller';
import { UpdatePacienteContactoHttpController } from '../presentation/http/update-paciente-contacto.http.controller';
import { UpdatePacienteDatosHttpController } from '../presentation/http/update-paciente-datos.http.controller';
import { UpdatePacienteEmbarazadaHttpController } from '../presentation/http/update-paciente-embarazada.http.controller';
import { UpdatePacienteHemorragiasHttpController } from '../presentation/http/update-paciente-hemorragias.http.controller';
import { UpdatePacienteMedicacionHttpController } from '../presentation/http/update-paciente-medicacion.http.controller';
import { UpdatePacienteNotasHttpController } from '../presentation/http/update-paciente-notas.http.controller';
import { UpdatePacientePatologiasHttpController } from '../presentation/http/update-paciente-patologias.http.controller';

// Infrastructure
import { PacienteRepository } from '../infrastructure/paciente/paciente.repository';
import { PacienteMapper } from '../infrastructure/paciente/paciente.mapper';

// Tokens
export const PACIENTE_REPOSITORY = Symbol('PACIENTE_REPOSITORY');

const commandHandlers = [
  CreatePacienteService,
  DeletePacienteService,
  UpdatePacienteAddressService,
  UpdatePacienteContactoService,
  UpdatePacienteDatosService,
  UpdatePacienteAlergiasService,
  UpdatePacienteNotasService,
  UpdatePacienteMedicacionService,
  UpdatePacientePatologiasService,
  UpdatePacienteEmbarazadaService,
  UpdatePacienteHemorragiasService,
];

const queryHandlers = [
  FindPacientesQueryHandler,
  FindPacienteByIdQueryHandler,
];

const eventHandlers = [
  PacienteCreatedEventHandler,
  PacienteUpdatedEventHandler,
];

const controllers = [
  CreatePacienteHttpController,
  DeletePacienteHttpController,
  FindPacientesHttpController,
  FindPacienteByIdHttpController,
  UpdatePacienteAddressHttpController,
  UpdatePacienteAlergiasHttpController,
  UpdatePacienteContactoHttpController,
  UpdatePacienteDatosHttpController,
  UpdatePacienteEmbarazadaHttpController,
  UpdatePacienteHemorragiasHttpController,
  UpdatePacienteMedicacionHttpController,
  UpdatePacienteNotasHttpController,
  UpdatePacientePatologiasHttpController,
];

@Module({
  imports: [CqrsModule],
  controllers,
  providers: [
    ...commandHandlers,
    ...queryHandlers,
    ...eventHandlers,
    PacienteBusinessRulesValidator,
    PacienteMapper,
    {
      provide: PACIENTE_REPOSITORY,
      useClass: PacienteRepository,
    },
  ],
})
export class PacienteModule {} 

