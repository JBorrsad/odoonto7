"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteHemorragiasUpdatedDomainEvent = void 0;
const shared_1 = require("@odoonto7/shared");
class PacienteHemorragiasUpdatedDomainEvent extends shared_1.DomainEvent {
    constructor(props) {
        super(props);
        this.hemorragiasDentales = props.hemorragiasDentales;
    }
}
exports.PacienteHemorragiasUpdatedDomainEvent = PacienteHemorragiasUpdatedDomainEvent;
//# sourceMappingURL=paciente-hemorragias-updated.domain-event.js.map