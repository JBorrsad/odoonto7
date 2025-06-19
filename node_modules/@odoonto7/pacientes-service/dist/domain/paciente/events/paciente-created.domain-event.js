"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteCreatedDomainEvent = void 0;
const shared_1 = require("@odoonto7/shared");
class PacienteCreatedDomainEvent extends shared_1.DomainEvent {
    constructor(props) {
        super(props);
        this.nombre = props.nombre;
        this.apellidos = props.apellidos;
        this.edad = props.edad;
        this.sexo = props.sexo;
        this.telefono = props.telefono;
        this.email = props.email;
        this.alergias = props.alergias;
        this.notas = props.notas;
        this.medicacion = props.medicacion;
        this.patologiasMedicas = props.patologiasMedicas;
        this.embarazada = props.embarazada;
        this.hemorragiasDentales = props.hemorragiasDentales;
        this.country = props.country;
        this.postalCode = props.postalCode;
        this.street = props.street;
    }
}
exports.PacienteCreatedDomainEvent = PacienteCreatedDomainEvent;
//# sourceMappingURL=paciente-created.domain-event.js.map