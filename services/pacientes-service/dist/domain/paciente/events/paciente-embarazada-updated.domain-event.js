"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteEmbarazadaUpdatedDomainEvent = void 0;
const shared_1 = require("@odoonto7/shared");
class PacienteEmbarazadaUpdatedDomainEvent extends shared_1.DomainEvent {
    constructor(props) {
        super(props);
        this.embarazada = props.embarazada;
    }
}
exports.PacienteEmbarazadaUpdatedDomainEvent = PacienteEmbarazadaUpdatedDomainEvent;
//# sourceMappingURL=paciente-embarazada-updated.domain-event.js.map