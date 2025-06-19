"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteNotasUpdatedDomainEvent = void 0;
const shared_1 = require("@odoonto7/shared");
class PacienteNotasUpdatedDomainEvent extends shared_1.DomainEvent {
    constructor(props) {
        super(props);
        this.notas = props.notas;
    }
}
exports.PacienteNotasUpdatedDomainEvent = PacienteNotasUpdatedDomainEvent;
//# sourceMappingURL=paciente-notas-updated.domain-event.js.map