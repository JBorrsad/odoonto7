"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteAddressUpdatedDomainEvent = void 0;
const shared_1 = require("@odoonto7/shared");
class PacienteAddressUpdatedDomainEvent extends shared_1.DomainEvent {
    constructor(props) {
        super(props);
        this.country = props.country;
        this.postalCode = props.postalCode;
        this.street = props.street;
    }
}
exports.PacienteAddressUpdatedDomainEvent = PacienteAddressUpdatedDomainEvent;
//# sourceMappingURL=paciente-address-updated.domain-event.js.map