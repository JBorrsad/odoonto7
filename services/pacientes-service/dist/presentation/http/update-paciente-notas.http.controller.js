"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePacienteNotasHttpController = void 0;
const common_1 = require("@nestjs/common");
const app_routes_1 = require("../../config/app.routes");
const cqrs_1 = require("@nestjs/cqrs");
const oxide_ts_1 = require("oxide.ts");
const swagger_1 = require("@nestjs/swagger");
const update_paciente_notas_command_1 = require("../../application/paciente/commands/update-paciente-notas/update-paciente-notas.command");
const update_paciente_notas_request_dto_1 = require("./commands/update-paciente-notas.request.dto");
const shared_1 = require("@odoonto7/shared");
const shared_2 = require("@odoonto7/shared");
const shared_3 = require("@odoonto7/shared");
let UpdatePacienteNotasHttpController = class UpdatePacienteNotasHttpController {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    async updateNotas(pacienteId, request) {
        const command = new update_paciente_notas_command_1.UpdatePacienteNotasCommand({
            pacienteId,
            ...request,
        });
        const result = await this.commandBus.execute(command);
        return (0, oxide_ts_1.match)(result, {
            Ok: (id) => new shared_3.IdResponse(id),
            Err: (error) => {
                if (error instanceof shared_1.NotFoundException)
                    throw new common_1.NotFoundException(error.message);
                throw error;
            },
        });
    }
};
exports.UpdatePacienteNotasHttpController = UpdatePacienteNotasHttpController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update paciente notas' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: shared_3.IdResponse,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: shared_1.NotFoundException.message,
        type: shared_2.ApiErrorResponse,
    }),
    (0, common_1.Patch)(`${app_routes_1.routesV1.pacientes.root}/:id/notas`),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_paciente_notas_request_dto_1.UpdatePacienteNotasRequestDto]),
    __metadata("design:returntype", Promise)
], UpdatePacienteNotasHttpController.prototype, "updateNotas", null);
exports.UpdatePacienteNotasHttpController = UpdatePacienteNotasHttpController = __decorate([
    (0, common_1.Controller)(app_routes_1.routesV1.version),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], UpdatePacienteNotasHttpController);
//# sourceMappingURL=update-paciente-notas.http.controller.js.map