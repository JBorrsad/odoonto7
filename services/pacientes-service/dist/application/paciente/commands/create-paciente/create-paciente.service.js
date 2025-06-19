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
exports.CreatePacienteService = void 0;
const paciente_1 = require("../../../../domain/paciente");
const cqrs_1 = require("@nestjs/cqrs");
const oxide_ts_1 = require("oxide.ts");
const create_paciente_command_1 = require("./create-paciente.command");
const shared_1 = require("@odoonto7/shared");
const common_1 = require("@nestjs/common");
const paciente_di_tokens_1 = require("../../../../config/modules/paciente.di-tokens");
const paciente_business_rules_validator_1 = require("../../validators/paciente-business-rules.validator");
let CreatePacienteService = class CreatePacienteService {
    constructor(pacienteRepo, validator) {
        this.pacienteRepo = pacienteRepo;
        this.validator = validator;
    }
    async execute(command) {
        try {
            this.validator.validateCreatePaciente(command);
            const paciente = paciente_1.PacienteEntity.create({
                nombre: command.nombre,
                apellidos: command.apellidos,
                edad: command.edad,
                sexo: command.sexo,
                telefono: command.telefono,
                email: command.email,
                alergias: command.alergias,
                notas: command.notas,
                medicacion: command.medicacion,
                patologiasMedicas: command.patologiasMedicas,
                embarazada: command.embarazada,
                hemorragiasDentales: command.hemorragiasDentales,
                address: new paciente_1.Address({
                    country: command.country,
                    postalCode: command.postalCode,
                    street: command.street,
                }),
            });
            await this.pacienteRepo.transaction(async () => this.pacienteRepo.insert(paciente));
            return (0, oxide_ts_1.Ok)(paciente.id);
        }
        catch (error) {
            if (error instanceof shared_1.ConflictException) {
                return (0, oxide_ts_1.Err)(new paciente_1.PacienteAlreadyExistsError(error));
            }
            throw error;
        }
    }
};
exports.CreatePacienteService = CreatePacienteService;
exports.CreatePacienteService = CreatePacienteService = __decorate([
    (0, cqrs_1.CommandHandler)(create_paciente_command_1.CreatePacienteCommand),
    __param(0, (0, common_1.Inject)(paciente_di_tokens_1.PACIENTE_REPOSITORY)),
    __metadata("design:paramtypes", [Object, paciente_business_rules_validator_1.PacienteBusinessRulesValidator])
], CreatePacienteService);
//# sourceMappingURL=create-paciente.service.js.map