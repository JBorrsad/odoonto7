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
exports.PacientePaginatedResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("@odoonto7/shared");
const paciente_response_dto_1 = require("./paciente.response.dto");
class PacientePaginatedResponseDto extends shared_1.PaginatedResponseDto {
}
exports.PacientePaginatedResponseDto = PacientePaginatedResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [paciente_response_dto_1.PacienteResponseDto] }),
    __metadata("design:type", Array)
], PacientePaginatedResponseDto.prototype, "data", void 0);
//# sourceMappingURL=paciente.paginated.response.dto.js.map