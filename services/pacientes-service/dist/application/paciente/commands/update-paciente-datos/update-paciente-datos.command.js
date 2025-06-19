"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePacienteDatosCommand = void 0;
const shared_1 = require("@odoonto7/shared");
class UpdatePacienteDatosCommand extends shared_1.Command {
    constructor(props) {
        super(props);
        this.pacienteId = props.pacienteId;
        this.nombre = props.nombre;
        this.apellidos = props.apellidos;
        this.edad = props.edad;
        this.sexo = props.sexo;
    }
}
exports.UpdatePacienteDatosCommand = UpdatePacienteDatosCommand;
//# sourceMappingURL=update-paciente-datos.command.js.map