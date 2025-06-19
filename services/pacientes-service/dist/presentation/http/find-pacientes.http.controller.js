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
exports.FindPacientesHttpController = void 0;
const common_1 = require("@nestjs/common");
const app_routes_1 = require("../../config/app.routes");
const cqrs_1 = require("@nestjs/cqrs");
const swagger_1 = require("@nestjs/swagger");
const find_pacientes_request_dto_1 = require("./queries/find-pacientes.request.dto");
const find_pacientes_query_handler_1 = require("../../application/paciente/queries/find-pacientes/find-pacientes.query-handler");
const paciente_paginated_response_dto_1 = require("./dtos/paciente.paginated.response.dto");
const shared_1 = require("@odoonto7/shared");
const paciente_mapper_1 = require("../../infrastructure/paciente/paciente.mapper");
let FindPacientesHttpController = class FindPacientesHttpController {
    constructor(queryBus, mapper) {
        this.queryBus = queryBus;
        this.mapper = mapper;
    }
    async findPacientes(request, queryParams) {
        const query = new find_pacientes_query_handler_1.FindPacientesQuery({
            ...request,
            limit: queryParams?.limit,
            page: queryParams?.page,
        });
        const result = await this.queryBus.execute(query);
        const paginated = result.unwrap();
        return new paciente_paginated_response_dto_1.PacientePaginatedResponseDto({
            ...paginated,
            data: paginated.data.map((paciente) => this.mapper.toResponse(paciente)),
        });
    }
};
exports.FindPacientesHttpController = FindPacientesHttpController;
__decorate([
    (0, common_1.Get)(app_routes_1.routesV1.pacientes.root),
    (0, swagger_1.ApiOperation)({ summary: 'Find pacientes' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: paciente_paginated_response_dto_1.PacientePaginatedResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_pacientes_request_dto_1.FindPacientesRequestDto,
        shared_1.PaginatedQueryRequestDto]),
    __metadata("design:returntype", Promise)
], FindPacientesHttpController.prototype, "findPacientes", null);
exports.FindPacientesHttpController = FindPacientesHttpController = __decorate([
    (0, common_1.Controller)(app_routes_1.routesV1.version),
    __metadata("design:paramtypes", [cqrs_1.QueryBus,
        paciente_mapper_1.PacienteMapper])
], FindPacientesHttpController);
//# sourceMappingURL=find-pacientes.http.controller.js.map