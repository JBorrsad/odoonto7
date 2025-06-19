"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePacienteCommand = void 0;
const shared_1 = require("@odoonto7/shared");
class DeletePacienteCommand extends shared_1.Command {
    constructor(props) {
        super(props);
        this.pacienteId = props.pacienteId;
    }
}
exports.DeletePacienteCommand = DeletePacienteCommand;
//# sourceMappingURL=delete-paciente.command.js.map