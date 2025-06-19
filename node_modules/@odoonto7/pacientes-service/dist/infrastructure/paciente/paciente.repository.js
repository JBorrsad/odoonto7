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
exports.PacienteRepository = exports.pacienteSchema = void 0;
const nestjs_slonik_1 = require("nestjs-slonik");
const zod_1 = require("zod");
const paciente_mapper_1 = require("./paciente.mapper");
const paciente_1 = require("../../domain/paciente");
const shared_1 = require("@odoonto7/shared");
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
exports.pacienteSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    createdAt: zod_1.z.preprocess((val) => new Date(val), zod_1.z.date()),
    updatedAt: zod_1.z.preprocess((val) => new Date(val), zod_1.z.date()),
    nombre: zod_1.z.string().min(1).max(50),
    apellidos: zod_1.z.string().min(1).max(100),
    edad: zod_1.z.number().min(0).max(120),
    sexo: zod_1.z.nativeEnum(paciente_1.Sexo),
    telefono: zod_1.z.string().min(1).max(20),
    email: zod_1.z.string().email(),
    alergias: zod_1.z.string().max(500).optional(),
    notas: zod_1.z.string().max(1000).optional(),
    medicacion: zod_1.z.string().optional(),
    patologiasMedicas: zod_1.z.string().optional(),
    embarazada: zod_1.z.boolean().nullable(),
    hemorragiasDentales: zod_1.z.boolean(),
    country: zod_1.z.string().min(1).max(50),
    postalCode: zod_1.z.string().min(1).max(10),
    street: zod_1.z.string().min(1).max(100),
});
let PacienteRepository = PacienteRepository_1 = class PacienteRepository extends shared_1.SqlRepositoryBase {
    constructor(pool, mapper, eventEmitter) {
        super(pool, mapper, eventEmitter, new common_1.Logger(PacienteRepository_1.name));
        this.tableName = 'pacientes';
        this.schema = exports.pacienteSchema;
    }
    async updateAddress(paciente) {
    }
    async findOneByEmail(email) {
        return null;
    }
    async findOneByTelefono(telefono) {
        return null;
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