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
const slonik_1 = require("slonik");
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
    async findWithFilters(params) {
        const conditions = [];
        const values = {};
        if (params.nombre) {
            conditions.push((0, slonik_1.sql) `nombre ILIKE ${`%${params.nombre}%`}`);
        }
        if (params.apellidos) {
            conditions.push((0, slonik_1.sql) `apellidos ILIKE ${`%${params.apellidos}%`}`);
        }
        if (params.email) {
            conditions.push((0, slonik_1.sql) `email ILIKE ${`%${params.email}%`}`);
        }
        if (params.country) {
            conditions.push((0, slonik_1.sql) `country = ${params.country}`);
        }
        if (params.postalCode) {
            conditions.push((0, slonik_1.sql) `postal_code = ${params.postalCode}`);
        }
        if (params.street) {
            conditions.push((0, slonik_1.sql) `street ILIKE ${`%${params.street}%`}`);
        }
        let query = (0, slonik_1.sql) `
      SELECT * FROM ${slonik_1.sql.identifier([this.tableName])}
    `;
        if (conditions.length > 0) {
            query = (0, slonik_1.sql) `${query} WHERE ${slonik_1.sql.join(conditions, (0, slonik_1.sql) ` AND `)}`;
        }
        query = (0, slonik_1.sql) `${query} ORDER BY created_at DESC`;
        if (params.limit) {
            query = (0, slonik_1.sql) `${query} LIMIT ${params.limit}`;
        }
        if (params.offset) {
            query = (0, slonik_1.sql) `${query} OFFSET ${params.offset}`;
        }
        const records = await this.pool.query(query);
        return records.rows.map((row) => {
            const model = this.schema.parse(row);
            return this.mapper.toDomain(model);
        });
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