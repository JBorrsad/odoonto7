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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("@odoonto7/shared");
const paciente_1 = require("../../../domain/paciente");
class PacienteResponseDto extends shared_1.ResponseBase {
}
exports.PacienteResponseDto = PacienteResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Juan',
        description: 'Nombre del paciente',
    }),
    __metadata("design:type", String)
], PacienteResponseDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'García López',
        description: 'Apellidos del paciente',
    }),
    __metadata("design:type", String)
], PacienteResponseDto.prototype, "apellidos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 30,
        description: 'Edad del paciente',
    }),
    __metadata("design:type", Number)
], PacienteResponseDto.prototype, "edad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: paciente_1.Sexo.HOMBRE,
        description: 'Sexo del paciente',
        enum: paciente_1.Sexo,
    }),
    __metadata("design:type", String)
], PacienteResponseDto.prototype, "sexo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+34612345678',
        description: 'Teléfono del paciente',
    }),
    __metadata("design:type", String)
], PacienteResponseDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'juan@email.com',
        description: 'Email del paciente',
    }),
    __metadata("design:type", String)
], PacienteResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'España',
        description: 'País de residencia',
    }),
    __metadata("design:type", String)
], PacienteResponseDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '28001',
        description: 'Código postal',
    }),
    __metadata("design:type", String)
], PacienteResponseDto.prototype, "postalCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Calle Mayor 123',
        description: 'Dirección',
    }),
    __metadata("design:type", String)
], PacienteResponseDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['Alérgico a penicilina'],
        description: 'Alergias del paciente',
    }),
    __metadata("design:type", Array)
], PacienteResponseDto.prototype, "alergias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Paciente nervioso',
        description: 'Notas del paciente',
    }),
    __metadata("design:type", String)
], PacienteResponseDto.prototype, "notas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['Omeprazol 20mg'],
        description: 'Medicación actual',
    }),
    __metadata("design:type", Array)
], PacienteResponseDto.prototype, "medicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['Hipertensión arterial'],
        description: 'Patologías médicas',
    }),
    __metadata("design:type", Array)
], PacienteResponseDto.prototype, "patologiasMedicas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'Estado de embarazo',
    }),
    __metadata("design:type", Boolean)
], PacienteResponseDto.prototype, "embarazada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'Historial de hemorragias dentales',
    }),
    __metadata("design:type", Boolean)
], PacienteResponseDto.prototype, "hemorragiasDentales", void 0);
//# sourceMappingURL=paciente.response.dto.js.map