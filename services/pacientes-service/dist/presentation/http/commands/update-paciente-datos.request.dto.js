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
exports.UpdatePacienteDatosRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const paciente_1 = require("../../../domain/paciente");
class UpdatePacienteDatosRequestDto {
}
exports.UpdatePacienteDatosRequestDto = UpdatePacienteDatosRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Juan',
        description: 'Nombre del paciente',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/),
    __metadata("design:type", String)
], UpdatePacienteDatosRequestDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'García López',
        description: 'Apellidos del paciente',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/),
    __metadata("design:type", String)
], UpdatePacienteDatosRequestDto.prototype, "apellidos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 35,
        description: 'Edad del paciente',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(120),
    __metadata("design:type", Number)
], UpdatePacienteDatosRequestDto.prototype, "edad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: paciente_1.Sexo.HOMBRE,
        description: 'Sexo del paciente',
        enum: paciente_1.Sexo,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(paciente_1.Sexo),
    __metadata("design:type", String)
], UpdatePacienteDatosRequestDto.prototype, "sexo", void 0);
//# sourceMappingURL=update-paciente-datos.request.dto.js.map