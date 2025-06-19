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
var PacienteRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteRepository = void 0;
const nestjs_slonik_1 = require("nestjs-slonik");
const paciente_mapper_1 = require("./paciente.mapper");
const shared_1 = require("@odoonto7/shared");
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const paciente_schema_1 = require("./paciente.schema");
let PacienteRepository = PacienteRepository_1 = class PacienteRepository extends shared_1.SqlRepositoryBase {
    constructor(pool, mapper, eventEmitter) {
        super(pool, mapper, eventEmitter, new common_1.Logger(PacienteRepository_1.name));
        this.tableName = 'pacientes';
        this.schema = paciente_schema_1.pacienteSchema;
    }
};
exports.PacienteRepository = PacienteRepository;
exports.PacienteRepository = PacienteRepository = PacienteRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_slonik_1.InjectPool)()),
    __metadata("design:paramtypes", [Object, paciente_mapper_1.PacienteMapper,
        event_emitter_1.EventEmitter2])
], PacienteRepository);
//# sourceMappingURL=paciente.repository.js.map