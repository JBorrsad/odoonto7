"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePacientePatologiasCommand = void 0;
const shared_1 = require("@odoonto7/shared");
class UpdatePacientePatologiasCommand extends shared_1.Command {
    constructor(props) {
        super(props);
        this.pacienteId = props.pacienteId;
        this.patologiasMedicas = props.patologiasMedicas;
    }
}
exports.UpdatePacientePatologiasCommand = UpdatePacientePatologiasCommand;
//# sourceMappingURL=update-paciente-patologias.command.js.map