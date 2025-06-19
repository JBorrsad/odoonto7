"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePacienteContactoCommand = void 0;
const shared_1 = require("@odoonto7/shared");
class UpdatePacienteContactoCommand extends shared_1.Command {
    constructor(props) {
        super(props);
        this.pacienteId = props.pacienteId;
        this.telefono = props.telefono;
        this.email = props.email;
    }
}
exports.UpdatePacienteContactoCommand = UpdatePacienteContactoCommand;
//# sourceMappingURL=update-paciente-contacto.command.js.map