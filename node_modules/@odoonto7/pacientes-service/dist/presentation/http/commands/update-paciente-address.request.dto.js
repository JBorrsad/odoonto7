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
exports.UpdatePacienteAddressRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdatePacienteAddressRequestDto {
}
exports.UpdatePacienteAddressRequestDto = UpdatePacienteAddressRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'España',
        description: 'País de residencia',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[a-zA-Z ]*$/),
    __metadata("design:type", String)
], UpdatePacienteAddressRequestDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '28001',
        description: 'Código postal',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(10),
    (0, class_validator_1.IsAlphanumeric)(),
    __metadata("design:type", String)
], UpdatePacienteAddressRequestDto.prototype, "postalCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Gran Vía 123',
        description: 'Dirección de la calle',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePacienteAddressRequestDto.prototype, "street", void 0);
//# sourceMappingURL=update-paciente-address.request.dto.js.map