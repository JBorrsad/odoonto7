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
exports.FindPacientesQueryHandler = exports.FindPacientesQuery = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const oxide_ts_1 = require("oxide.ts");
const shared_1 = require("@odoonto7/shared");
const shared_2 = require("@odoonto7/shared");
const common_1 = require("@nestjs/common");
const paciente_di_tokens_1 = require("../../../../config/modules/paciente.di-tokens");
class FindPacientesQuery extends shared_1.PaginatedQueryBase {
    constructor(props) {
        super(props);
        this.country = props.country;
        this.postalCode = props.postalCode;
        this.street = props.street;
        this.email = props.email;
        this.nombre = props.nombre;
        this.apellidos = props.apellidos;
    }
}
exports.FindPacientesQuery = FindPacientesQuery;
let FindPacientesQueryHandler = class FindPacientesQueryHandler {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(query) {
        const entities = await this.repository.findAll();
        return (0, oxide_ts_1.Ok)(new shared_2.Paginated({
            data: entities,
            count: entities.length,
            limit: query.limit,
            page: query.page,
        }));
    }
};
exports.FindPacientesQueryHandler = FindPacientesQueryHandler;
exports.FindPacientesQueryHandler = FindPacientesQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(FindPacientesQuery),
    __param(0, (0, common_1.Inject)(paciente_di_tokens_1.PACIENTE_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], FindPacientesQueryHandler);
//# sourceMappingURL=find-pacientes.query-handler.js.map