"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePacienteAlergiasCommand = void 0;
const shared_1 = require("@odoonto7/shared");
class UpdatePacienteAlergiasCommand extends shared_1.Command {
    constructor(props) {
        super(props);
        this.pacienteId = props.pacienteId;
        this.alergias = props.alergias;
    }
}
exports.UpdatePacienteAlergiasCommand = UpdatePacienteAlergiasCommand;
//# sourceMappingURL=update-paciente-alergias.command.js.map