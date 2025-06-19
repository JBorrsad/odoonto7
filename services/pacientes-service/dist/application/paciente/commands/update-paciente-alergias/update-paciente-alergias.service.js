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
exports.UpdatePacienteAlergiasService = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const oxide_ts_1 = require("oxide.ts");
const update_paciente_alergias_command_1 = require("./update-paciente-alergias.command");
const common_1 = require("@nestjs/common");
const paciente_di_tokens_1 = require("../../../../config/modules/paciente.di-tokens");
const shared_1 = require("@odoonto7/shared");
let UpdatePacienteAlergiasService = class UpdatePacienteAlergiasService {
    constructor(pacienteRepo) {
        this.pacienteRepo = pacienteRepo;
    }
    async execute(command) {
        const found = await this.pacienteRepo.findOneById(command.pacienteId);
        if (found.isNone())
            return (0, oxide_ts_1.Err)(new shared_1.NotFoundException());
        const paciente = found.unwrap();
        paciente.updateAlergias({
            alergias: command.alergias,
        });
        try {
            await this.pacienteRepo.transaction(async () => this.pacienteRepo.insert(paciente));
            return (0, oxide_ts_1.Ok)(paciente.id);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.UpdatePacienteAlergiasService = UpdatePacienteAlergiasService;
exports.UpdatePacienteAlergiasService = UpdatePacienteAlergiasService = __decorate([
    (0, cqrs_1.CommandHandler)(update_paciente_alergias_command_1.UpdatePacienteAlergiasCommand),
    __param(0, (0, common_1.Inject)(paciente_di_tokens_1.PACIENTE_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], UpdatePacienteAlergiasService);
//# sourceMappingURL=update-paciente-alergias.service.js.map