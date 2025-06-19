"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteMapper = void 0;
const paciente_schema_1 = require("./paciente.schema");
const paciente_1 = require("../../domain/paciente");
const paciente_response_dto_1 = require("../../presentation/http/dtos/paciente.response.dto");
const common_1 = require("@nestjs/common");
let PacienteMapper = class PacienteMapper {
    toPersistence(entity) {
        const copy = entity.getProps();
        const record = {
            id: copy.id,
            createdAt: copy.createdAt,
            updatedAt: copy.updatedAt,
            nombre: copy.nombre,
            apellidos: copy.apellidos,
            edad: copy.edad,
            sexo: copy.sexo,
            telefono: copy.telefono,
            email: copy.email,
            alergias: copy.alergias,
            notas: copy.notas,
            medicacion: copy.medicacion,
            patologiasMedicas: copy.patologiasMedicas,
            embarazada: copy.embarazada ?? null,
            hemorragiasDentales: copy.hemorragiasDentales,
            country: copy.address.country,
            postalCode: copy.address.postalCode,
            street: copy.address.street,
        };
        return paciente_schema_1.pacienteSchema.parse(record);
    }
    toDomain(record) {
        const entity = new paciente_1.PacienteEntity({
            id: record.id,
            createdAt: new Date(record.createdAt),
            updatedAt: new Date(record.updatedAt),
            props: {
                nombre: record.nombre,
                apellidos: record.apellidos,
                edad: record.edad,
                sexo: record.sexo,
                telefono: record.telefono,
                email: record.email,
                alergias: record.alergias,
                notas: record.notas,
                medicacion: record.medicacion,
                patologiasMedicas: record.patologiasMedicas,
                embarazada: record.embarazada ?? undefined,
                hemorragiasDentales: record.hemorragiasDentales,
                address: new paciente_1.Address({
                    street: record.street,
                    postalCode: record.postalCode,
                    country: record.country,
                }),
            },
        });
        return entity;
    }
    toResponse(entity) {
        const props = entity.getProps();
        const response = new paciente_response_dto_1.PacienteResponseDto(entity);
        response.nombre = props.nombre;
        response.apellidos = props.apellidos;
        response.edad = props.edad;
        response.sexo = props.sexo;
        response.telefono = props.telefono;
        response.email = props.email;
        response.alergias = props.alergias;
        response.notas = props.notas;
        response.medicacion = props.medicacion;
        response.patologiasMedicas = props.patologiasMedicas;
        response.embarazada = props.embarazada;
        response.hemorragiasDentales = props.hemorragiasDentales;
        response.country = props.address.country;
        response.postalCode = props.address.postalCode;
        response.street = props.address.street;
        return response;
    }
};
exports.PacienteMapper = PacienteMapper;
exports.PacienteMapper = PacienteMapper = __decorate([
    (0, common_1.Injectable)()
], PacienteMapper);
//# sourceMappingURL=paciente.mapper.js.map