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
const find_pacientes_query_handler_1 = require("../application/paciente/queries/find-pacientes/find-pacientes.query-handler");
const create_paciente_http_controller_1 = require("../presentation/http/create-paciente.http.controller");
const delete_paciente_http_controller_1 = require("../presentation/http/delete-paciente.http-controller");
const find_pacientes_http_controller_1 = require("../presentation/http/find-pacientes.http.controller");
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
const commandHandlers = [];
const queryHandlers = [find_pacientes_query_handler_1.FindPacientesQueryHandler];
const controllers = [
    create_paciente_http_controller_1.CreatePacienteHttpController,
    delete_paciente_http_controller_1.DeletePacienteHttpController,
    find_pacientes_http_controller_1.FindPacientesHttpController,
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
            paciente_mapper_1.PacienteMapper,
            {
                provide: exports.PACIENTE_REPOSITORY,
                useClass: paciente_repository_1.PacienteRepository,
            },
        ],
    })
], PacienteModule);
//# sourceMappingURL=paciente.module.js.map