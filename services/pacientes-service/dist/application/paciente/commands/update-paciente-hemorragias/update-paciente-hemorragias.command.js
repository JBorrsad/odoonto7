"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePacienteHemorragiasCommand = void 0;
const shared_1 = require("@odoonto7/shared");
class UpdatePacienteHemorragiasCommand extends shared_1.Command {
    constructor(props) {
        super(props);
        this.pacienteId = props.pacienteId;
        this.hemorragiasDentales = props.hemorragiasDentales;
    }
}
exports.UpdatePacienteHemorragiasCommand = UpdatePacienteHemorragiasCommand;
//# sourceMappingURL=update-paciente-hemorragias.command.js.map