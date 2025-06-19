"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteAlreadyExistsError = void 0;
const shared_1 = require("@odoonto7/shared");
class PacienteAlreadyExistsError extends shared_1.ExceptionBase {
    constructor(cause, metadata) {
        super(PacienteAlreadyExistsError.message, cause, metadata);
        this.code = 'PACIENTE.ALREADY_EXISTS';
    }
}
exports.PacienteAlreadyExistsError = PacienteAlreadyExistsError;
PacienteAlreadyExistsError.message = 'Paciente already exists';
//# sourceMappingURL=paciente-already-exists.error.js.map