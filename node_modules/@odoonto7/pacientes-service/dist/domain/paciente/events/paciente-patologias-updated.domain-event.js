"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacientePatologiasUpdatedDomainEvent = void 0;
const shared_1 = require("@odoonto7/shared");
class PacientePatologiasUpdatedDomainEvent extends shared_1.DomainEvent {
    constructor(props) {
        super(props);
        this.patologiasMedicas = props.patologiasMedicas;
    }
}
exports.PacientePatologiasUpdatedDomainEvent = PacientePatologiasUpdatedDomainEvent;
//# sourceMappingURL=paciente-patologias-updated.domain-event.js.map