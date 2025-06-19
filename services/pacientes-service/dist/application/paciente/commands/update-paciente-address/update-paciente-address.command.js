"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePacienteAddressCommand = void 0;
const shared_1 = require("@odoonto7/shared");
class UpdatePacienteAddressCommand extends shared_1.Command {
    constructor(props) {
        super(props);
        this.pacienteId = props.pacienteId;
        this.country = props.country;
        this.postalCode = props.postalCode;
        this.street = props.street;
    }
}
exports.UpdatePacienteAddressCommand = UpdatePacienteAddressCommand;
//# sourceMappingURL=update-paciente-address.command.js.map