import { Logger, Module, Provider } from '@nestjs/common';
import { PacienteRepository } from '@src/infrastructure/database/paciente/paciente.repository';
import { CreatePacienteHttpController } from '@src/presentation/http/paciente/create-paciente.http.controller';
import { CreatePacienteService } from '@src/application/paciente/commands/create-paciente/create-paciente.service';
import { DeletePacienteHttpController } from '@src/presentation/http/paciente/delete-paciente.http-controller';
import { DeletePacienteService } from '@src/application/paciente/commands/delete-paciente/delete-paciente.service';
import { UpdatePacienteAddressHttpController } from '@src/presentation/http/paciente/update-paciente-address.http.controller';
import { UpdatePacienteAddressService } from '@src/application/paciente/commands/update-paciente-address/update-paciente-address.service';
import { UpdatePacienteContactoHttpController } from '@src/presentation/http/paciente/update-paciente-contacto.http.controller';
import { UpdatePacienteContactoService } from '@src/application/paciente/commands/update-paciente-contacto/update-paciente-contacto.service';
import { UpdatePacienteDatosHttpController } from '@src/presentation/http/paciente/update-paciente-datos.http.controller';
import { UpdatePacienteDatosService } from '@src/application/paciente/commands/update-paciente-datos/update-paciente-datos.service';
import { UpdatePacienteAlergiasHttpController } from '@src/presentation/http/paciente/update-paciente-alergias.http.controller';
import { UpdatePacienteAlergiasService } from '@src/application/paciente/commands/update-paciente-alergias/update-paciente-alergias.service';
import { UpdatePacienteNotasHttpController } from '@src/presentation/http/paciente/update-paciente-notas.http.controller';
import { UpdatePacienteNotasService } from '@src/application/paciente/commands/update-paciente-notas/update-paciente-notas.service';
import { FindPacientesHttpController } from '@src/presentation/http/paciente/find-pacientes.http.controller';
import { FindPacientesQueryHandler } from '@src/application/paciente/queries/find-pacientes/find-pacientes.query-handler';
import { PacienteMapper } from '@src/infrastructure/database/paciente/paciente.mapper';
import { CqrsModule } from '@nestjs/cqrs';
import { PACIENTE_REPOSITORY } from './paciente.di-tokens';

const httpControllers = [
  CreatePacienteHttpController,
  DeletePacienteHttpController,
  UpdatePacienteAddressHttpController,
  UpdatePacienteContactoHttpController,
  UpdatePacienteDatosHttpController,
  UpdatePacienteAlergiasHttpController,
  UpdatePacienteNotasHttpController,
  FindPacientesHttpController,
];

const commandHandlers: Provider[] = [
  CreatePacienteService,
  DeletePacienteService,
  UpdatePacienteAddressService,
  UpdatePacienteContactoService,
  UpdatePacienteDatosService,
  UpdatePacienteAlergiasService,
  UpdatePacienteNotasService,
];

const queryHandlers: Provider[] = [FindPacientesQueryHandler];

const mappers: Provider[] = [PacienteMapper];

const repositories: Provider[] = [
  { provide: PACIENTE_REPOSITORY, useClass: PacienteRepository },
];

@Module({
  imports: [CqrsModule],
  controllers: [...httpControllers],
  providers: [
    Logger,
    ...repositories,
    ...commandHandlers,
    ...queryHandlers,
    ...mappers,
  ],
})
export class PacienteModule {}
