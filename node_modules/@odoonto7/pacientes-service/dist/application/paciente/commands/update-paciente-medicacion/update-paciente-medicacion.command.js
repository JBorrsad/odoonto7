"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePacienteMedicacionCommand = void 0;
const shared_1 = require("@odoonto7/shared");
class UpdatePacienteMedicacionCommand extends shared_1.Command {
    constructor(props) {
        super(props);
        this.pacienteId = props.pacienteId;
        this.medicacion = props.medicacion;
    }
}
exports.UpdatePacienteMedicacionCommand = UpdatePacienteMedicacionCommand;
//# sourceMappingURL=update-paciente-medicacion.command.js.map