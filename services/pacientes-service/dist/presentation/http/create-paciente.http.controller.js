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
exports.CreatePacienteHttpController = void 0;
const common_1 = require("@nestjs/common");
const app_routes_1 = require("../../config/app.routes");
const swagger_1 = require("@nestjs/swagger");
const cqrs_1 = require("@nestjs/cqrs");
const oxide_ts_1 = require("oxide.ts");
const create_paciente_command_1 = require("../../application/paciente/commands/create-paciente/create-paciente.command");
const create_paciente_request_dto_1 = require("./commands/create-paciente.request.dto");
const paciente_1 = require("../../domain/paciente");
const shared_1 = require("@odoonto7/shared");
const shared_2 = require("@odoonto7/shared");
let CreatePacienteHttpController = class CreatePacienteHttpController {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    async create(body) {
        const command = new create_paciente_command_1.CreatePacienteCommand(body);
        const result = await this.commandBus.execute(command);
        return (0, oxide_ts_1.match)(result, {
            Ok: (id) => new shared_1.IdResponse(id),
            Err: (error) => {
                if (error instanceof paciente_1.PacienteAlreadyExistsError)
                    throw new common_1.ConflictException(error.message);
                throw error;
            },
        });
    }
};
exports.CreatePacienteHttpController = CreatePacienteHttpController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a patient' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: shared_1.IdResponse,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CONFLICT,
        description: paciente_1.PacienteAlreadyExistsError.message,
        type: shared_2.ApiErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        type: shared_2.ApiErrorResponse,
    }),
    (0, common_1.Post)(app_routes_1.routesV1.pacientes.root),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paciente_request_dto_1.CreatePacienteRequestDto]),
    __metadata("design:returntype", Promise)
], CreatePacienteHttpController.prototype, "create", null);
exports.CreatePacienteHttpController = CreatePacienteHttpController = __decorate([
    (0, common_1.Controller)(app_routes_1.routesV1.version),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], CreatePacienteHttpController);
//# sourceMappingURL=create-paciente.http.controller.js.map