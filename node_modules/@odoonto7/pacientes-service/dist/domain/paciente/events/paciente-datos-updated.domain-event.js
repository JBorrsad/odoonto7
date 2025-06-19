"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteDatosUpdatedDomainEvent = void 0;
const shared_1 = require("@odoonto7/shared");
class PacienteDatosUpdatedDomainEvent extends shared_1.DomainEvent {
    constructor(props) {
        super(props);
        this.nombre = props.nombre;
        this.apellidos = props.apellidos;
        this.edad = props.edad;
        this.sexo = props.sexo;
    }
}
exports.PacienteDatosUpdatedDomainEvent = PacienteDatosUpdatedDomainEvent;
//# sourceMappingURL=paciente-datos-updated.domain-event.js.map