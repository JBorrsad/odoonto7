"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteAlergiasUpdatedDomainEvent = void 0;
const shared_1 = require("@odoonto7/shared");
class PacienteAlergiasUpdatedDomainEvent extends shared_1.DomainEvent {
    constructor(props) {
        super(props);
        this.alergias = props.alergias;
    }
}
exports.PacienteAlergiasUpdatedDomainEvent = PacienteAlergiasUpdatedDomainEvent;
//# sourceMappingURL=paciente-alergias-updated.domain-event.js.map