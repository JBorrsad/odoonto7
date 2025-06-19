"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteContactoUpdatedDomainEvent = void 0;
const shared_1 = require("@odoonto7/shared");
class PacienteContactoUpdatedDomainEvent extends shared_1.DomainEvent {
    constructor(props) {
        super(props);
        this.telefono = props.telefono;
        this.email = props.email;
    }
}
exports.PacienteContactoUpdatedDomainEvent = PacienteContactoUpdatedDomainEvent;
//# sourceMappingURL=paciente-contacto-updated.domain-event.js.map