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
exports.CreatePacienteRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const paciente_1 = require("../../../domain/paciente");
class CreatePacienteRequestDto {
}
exports.CreatePacienteRequestDto = CreatePacienteRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Juan', description: 'Nombre del paciente' }),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/),
    __metadata("design:type", String)
], CreatePacienteRequestDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'García López',
        description: 'Apellidos del paciente',
    }),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/),
    __metadata("design:type", String)
], CreatePacienteRequestDto.prototype, "apellidos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 30, description: 'Edad del paciente' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(120),
    __metadata("design:type", Number)
], CreatePacienteRequestDto.prototype, "edad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: paciente_1.Sexo.HOMBRE,
        description: 'Sexo del paciente',
        enum: paciente_1.Sexo,
    }),
    (0, class_validator_1.IsEnum)(paciente_1.Sexo),
    __metadata("design:type", String)
], CreatePacienteRequestDto.prototype, "sexo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+34612345678',
        description: 'Teléfono del paciente',
    }),
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.MinLength)(9),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePacienteRequestDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'juan@email.com', description: 'Email del paciente' }),
    (0, class_validator_1.MaxLength)(320),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreatePacienteRequestDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Alérgico a penicilina',
        description: 'Alergias del paciente',
    }),
    (0, class_validator_1.MaxLength)(500),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePacienteRequestDto.prototype, "alergias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Paciente nervioso, requiere cuidado especial',
        description: 'Notas del paciente',
    }),
    (0, class_validator_1.MaxLength)(1000),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePacienteRequestDto.prototype, "notas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Omeprazol 20mg cada 12h, Ibuprofeno 600mg si dolor',
        description: 'Medicación actual del paciente',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePacienteRequestDto.prototype, "medicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Hipertensión arterial, diabetes tipo 2',
        description: 'Patologías médicas del paciente',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePacienteRequestDto.prototype, "patologiasMedicas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'Estado de embarazo (solo para mujeres)',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePacienteRequestDto.prototype, "embarazada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'Historial de hemorragias dentales en extracciones',
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePacienteRequestDto.prototype, "hemorragiasDentales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'España', description: 'País de residencia' }),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/),
    __metadata("design:type", String)
], CreatePacienteRequestDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '28001', description: 'Código postal' }),
    (0, class_validator_1.MaxLength)(10),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.IsAlphanumeric)(),
    __metadata("design:type", String)
], CreatePacienteRequestDto.prototype, "postalCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Calle Mayor 123', description: 'Dirección' }),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePacienteRequestDto.prototype, "street", void 0);
//# sourceMappingURL=create-paciente.request.dto.js.map