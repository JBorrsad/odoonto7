"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteMedicacionUpdatedDomainEvent = void 0;
const shared_1 = require("@odoonto7/shared");
class PacienteMedicacionUpdatedDomainEvent extends shared_1.DomainEvent {
    constructor(props) {
        super(props);
        this.medicacion = props.medicacion;
    }
}
exports.PacienteMedicacionUpdatedDomainEvent = PacienteMedicacionUpdatedDomainEvent;
//# sourceMappingURL=paciente-medicacion-updated.domain-event.js.map