"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteInvalidPregnancyError = void 0;
const shared_1 = require("@odoonto7/shared");
class PacienteInvalidPregnancyError extends shared_1.ExceptionBase {
    constructor(cause, metadata) {
        super(PacienteInvalidPregnancyError.message, cause, metadata);
        this.code = 'PACIENTE.INVALID_PREGNANCY';
    }
}
exports.PacienteInvalidPregnancyError = PacienteInvalidPregnancyError;
PacienteInvalidPregnancyError.message = 'Solo las mujeres pueden estar embarazadas';
//# sourceMappingURL=paciente-invalid-pregnancy.error.js.map