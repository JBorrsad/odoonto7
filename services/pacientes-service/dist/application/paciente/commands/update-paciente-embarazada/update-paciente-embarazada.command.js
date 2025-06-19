"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePacienteEmbarazadaCommand = void 0;
const shared_1 = require("@odoonto7/shared");
class UpdatePacienteEmbarazadaCommand extends shared_1.Command {
    constructor(props) {
        super(props);
        this.pacienteId = props.pacienteId;
        this.embarazada = props.embarazada;
    }
}
exports.UpdatePacienteEmbarazadaCommand = UpdatePacienteEmbarazadaCommand;
//# sourceMappingURL=update-paciente-embarazada.command.js.map