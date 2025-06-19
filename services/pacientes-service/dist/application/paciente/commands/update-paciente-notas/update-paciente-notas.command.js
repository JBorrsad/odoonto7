"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePacienteNotasCommand = void 0;
const shared_1 = require("@odoonto7/shared");
class UpdatePacienteNotasCommand extends shared_1.Command {
    constructor(props) {
        super(props);
        this.pacienteId = props.pacienteId;
        this.notas = props.notas;
    }
}
exports.UpdatePacienteNotasCommand = UpdatePacienteNotasCommand;
//# sourceMappingURL=update-paciente-notas.command.js.map