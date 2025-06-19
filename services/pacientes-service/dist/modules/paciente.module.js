"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteModule = exports.PACIENTE_REPOSITORY = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_paciente_service_1 = require("../application/paciente/commands/create-paciente/create-paciente.service");
const delete_paciente_service_1 = require("../application/paciente/commands/delete-paciente/delete-paciente.service");
const update_paciente_address_service_1 = require("../application/paciente/commands/update-paciente-address/update-paciente-address.service");
const update_paciente_contacto_service_1 = require("../application/paciente/commands/update-paciente-contacto/update-paciente-contacto.service");
const update_paciente_datos_service_1 = require("../application/paciente/commands/update-paciente-datos/update-paciente-datos.service");
const update_paciente_alergias_service_1 = require("../application/paciente/commands/update-paciente-alergias/update-paciente-alergias.service");
const update_paciente_notas_service_1 = require("../application/paciente/commands/update-paciente-notas/update-paciente-notas.service");
const update_paciente_medicacion_service_1 = require("../application/paciente/commands/update-paciente-medicacion/update-paciente-medicacion.service");
const update_paciente_patologias_service_1 = require("../application/paciente/commands/update-paciente-patologias/update-paciente-patologias.service");
const update_paciente_embarazada_service_1 = require("../application/paciente/commands/update-paciente-embarazada/update-paciente-embarazada.service");
const update_paciente_hemorragias_service_1 = require("../application/paciente/commands/update-paciente-hemorragias/update-paciente-hemorragias.service");
const find_pacientes_query_handler_1 = require("../application/paciente/queries/find-pacientes/find-pacientes.query-handler");
const find_paciente_by_id_query_handler_1 = require("../application/paciente/queries/find-paciente-by-id/find-paciente-by-id.query-handler");
const paciente_created_event_handler_1 = require("../application/paciente/event-handlers/paciente-created.event-handler");
const paciente_updated_event_handler_1 = require("../application/paciente/event-handlers/paciente-updated.event-handler");
const paciente_business_rules_validator_1 = require("../application/paciente/validators/paciente-business-rules.validator");
const create_paciente_http_controller_1 = require("../presentation/http/create-paciente.http.controller");
const delete_paciente_http_controller_1 = require("../presentation/http/delete-paciente.http-controller");
const find_pacientes_http_controller_1 = require("../presentation/http/find-pacientes.http.controller");
const find_paciente_by_id_http_controller_1 = require("../presentation/http/find-paciente-by-id.http.controller");
const update_paciente_address_http_controller_1 = require("../presentation/http/update-paciente-address.http.controller");
const update_paciente_alergias_http_controller_1 = require("../presentation/http/update-paciente-alergias.http.controller");
const update_paciente_contacto_http_controller_1 = require("../presentation/http/update-paciente-contacto.http.controller");
const update_paciente_datos_http_controller_1 = require("../presentation/http/update-paciente-datos.http.controller");
const update_paciente_embarazada_http_controller_1 = require("../presentation/http/update-paciente-embarazada.http.controller");
const update_paciente_hemorragias_http_controller_1 = require("../presentation/http/update-paciente-hemorragias.http.controller");
const update_paciente_medicacion_http_controller_1 = require("../presentation/http/update-paciente-medicacion.http.controller");
const update_paciente_notas_http_controller_1 = require("../presentation/http/update-paciente-notas.http.controller");
const update_paciente_patologias_http_controller_1 = require("../presentation/http/update-paciente-patologias.http.controller");
const paciente_repository_1 = require("../infrastructure/paciente/paciente.repository");
const paciente_mapper_1 = require("../infrastructure/paciente/paciente.mapper");
exports.PACIENTE_REPOSITORY = Symbol('PACIENTE_REPOSITORY');
const commandHandlers = [
    create_paciente_service_1.CreatePacienteService,
    delete_paciente_service_1.DeletePacienteService,
    update_paciente_address_service_1.UpdatePacienteAddressService,
    update_paciente_contacto_service_1.UpdatePacienteContactoService,
    update_paciente_datos_service_1.UpdatePacienteDatosService,
    update_paciente_alergias_service_1.UpdatePacienteAlergiasService,
    update_paciente_notas_service_1.UpdatePacienteNotasService,
    update_paciente_medicacion_service_1.UpdatePacienteMedicacionService,
    update_paciente_patologias_service_1.UpdatePacientePatologiasService,
    update_paciente_embarazada_service_1.UpdatePacienteEmbarazadaService,
    update_paciente_hemorragias_service_1.UpdatePacienteHemorragiasService,
];
const queryHandlers = [
    find_pacientes_query_handler_1.FindPacientesQueryHandler,
    find_paciente_by_id_query_handler_1.FindPacienteByIdQueryHandler,
];
const eventHandlers = [
    paciente_created_event_handler_1.PacienteCreatedEventHandler,
    paciente_updated_event_handler_1.PacienteUpdatedEventHandler,
];
const controllers = [
    create_paciente_http_controller_1.CreatePacienteHttpController,
    delete_paciente_http_controller_1.DeletePacienteHttpController,
    find_pacientes_http_controller_1.FindPacientesHttpController,
    find_paciente_by_id_http_controller_1.FindPacienteByIdHttpController,
    update_paciente_address_http_controller_1.UpdatePacienteAddressHttpController,
    update_paciente_alergias_http_controller_1.UpdatePacienteAlergiasHttpController,
    update_paciente_contacto_http_controller_1.UpdatePacienteContactoHttpController,
    update_paciente_datos_http_controller_1.UpdatePacienteDatosHttpController,
    update_paciente_embarazada_http_controller_1.UpdatePacienteEmbarazadaHttpController,
    update_paciente_hemorragias_http_controller_1.UpdatePacienteHemorragiasHttpController,
    update_paciente_medicacion_http_controller_1.UpdatePacienteMedicacionHttpController,
    update_paciente_notas_http_controller_1.UpdatePacienteNotasHttpController,
    update_paciente_patologias_http_controller_1.UpdatePacientePatologiasHttpController,
];
let PacienteModule = class PacienteModule {
};
exports.PacienteModule = PacienteModule;
exports.PacienteModule = PacienteModule = __decorate([
    (0, common_1.Module)({
        imports: [cqrs_1.CqrsModule],
        controllers,
        providers: [
            ...commandHandlers,
            ...queryHandlers,
            ...eventHandlers,
            paciente_business_rules_validator_1.PacienteBusinessRulesValidator,
            paciente_mapper_1.PacienteMapper,
            {
                provide: exports.PACIENTE_REPOSITORY,
                useClass: paciente_repository_1.PacienteRepository,
            },
        ],
    })
], PacienteModule);
//# sourceMappingURL=paciente.module.js.map