"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteEntity = void 0;
const shared_1 = require("@odoonto7/shared");
const paciente_created_domain_event_1 = require("../events/paciente-created.domain-event");
const paciente_address_updated_domain_event_1 = require("../events/paciente-address-updated.domain-event");
const paciente_contacto_updated_domain_event_1 = require("../events/paciente-contacto-updated.domain-event");
const paciente_datos_updated_domain_event_1 = require("../events/paciente-datos-updated.domain-event");
const paciente_alergias_updated_domain_event_1 = require("../events/paciente-alergias-updated.domain-event");
const paciente_notas_updated_domain_event_1 = require("../events/paciente-notas-updated.domain-event");
const paciente_medicacion_updated_domain_event_1 = require("../events/paciente-medicacion-updated.domain-event");
const paciente_patologias_updated_domain_event_1 = require("../events/paciente-patologias-updated.domain-event");
const paciente_embarazada_updated_domain_event_1 = require("../events/paciente-embarazada-updated.domain-event");
const paciente_hemorragias_updated_domain_event_1 = require("../events/paciente-hemorragias-updated.domain-event");
const paciente_deleted_domain_event_1 = require("../events/paciente-deleted.domain-event");
const paciente_invalid_pregnancy_error_1 = require("../errors/paciente-invalid-pregnancy.error");
const address_value_object_1 = require("../value-objects/address.value-object");
const types_1 = require("../types");
const crypto_1 = require("crypto");
class PacienteEntity extends shared_1.AggregateRoot {
    static create(create) {
        const id = (0, crypto_1.randomUUID)();
        const props = {
            ...create,
            address: new address_value_object_1.Address(create.address),
            embarazada: create.sexo === types_1.Sexo.MUJER ? create.embarazada : undefined,
        };
        const paciente = new PacienteEntity({ id, props });
        paciente.addEvent(new paciente_created_domain_event_1.PacienteCreatedDomainEvent({
            aggregateId: id,
            nombre: props.nombre,
            apellidos: props.apellidos,
            edad: props.edad,
            sexo: props.sexo,
            telefono: props.telefono,
            email: props.email,
            alergias: props.alergias,
            notas: props.notas,
            medicacion: props.medicacion,
            patologiasMedicas: props.patologiasMedicas,
            embarazada: props.embarazada,
            hemorragiasDentales: props.hemorragiasDentales,
            country: props.address.country,
            postalCode: props.address.postalCode,
            street: props.address.street,
        }));
        return paciente;
    }
    get nombre() {
        return this.props.nombre;
    }
    get apellidos() {
        return this.props.apellidos;
    }
    get edad() {
        return this.props.edad;
    }
    get sexo() {
        return this.props.sexo;
    }
    get telefono() {
        return this.props.telefono;
    }
    get email() {
        return this.props.email;
    }
    get alergias() {
        return this.props.alergias;
    }
    get notas() {
        return this.props.notas;
    }
    get medicacion() {
        return this.props.medicacion;
    }
    get patologiasMedicas() {
        return this.props.patologiasMedicas;
    }
    get embarazada() {
        return this.props.embarazada;
    }
    get hemorragiasDentales() {
        return this.props.hemorragiasDentales;
    }
    delete() {
        this.addEvent(new paciente_deleted_domain_event_1.PacienteDeletedDomainEvent({
            aggregateId: this.id,
        }));
    }
    updateAddress(props) {
        const newAddress = new address_value_object_1.Address({
            ...this.props.address,
            ...props,
        });
        this.props.address = newAddress;
        this.addEvent(new paciente_address_updated_domain_event_1.PacienteAddressUpdatedDomainEvent({
            aggregateId: this.id,
            country: newAddress.country,
            street: newAddress.street,
            postalCode: newAddress.postalCode,
        }));
    }
    updateContacto(props) {
        if (props.telefono !== undefined) {
            this.props.telefono = props.telefono;
        }
        if (props.email !== undefined) {
            this.props.email = props.email;
        }
        this.addEvent(new paciente_contacto_updated_domain_event_1.PacienteContactoUpdatedDomainEvent({
            aggregateId: this.id,
            telefono: this.props.telefono,
            email: this.props.email,
        }));
    }
    updateDatos(props) {
        if (props.nombre !== undefined) {
            this.props.nombre = props.nombre;
        }
        if (props.apellidos !== undefined) {
            this.props.apellidos = props.apellidos;
        }
        if (props.edad !== undefined) {
            this.props.edad = props.edad;
        }
        if (props.sexo !== undefined) {
            this.props.sexo = props.sexo;
            if (props.sexo === types_1.Sexo.HOMBRE) {
                this.props.embarazada = undefined;
            }
        }
        this.addEvent(new paciente_datos_updated_domain_event_1.PacienteDatosUpdatedDomainEvent({
            aggregateId: this.id,
            nombre: this.props.nombre,
            apellidos: this.props.apellidos,
            edad: this.props.edad,
            sexo: this.props.sexo,
        }));
    }
    updateAlergias(props) {
        this.props.alergias = props.alergias;
        this.addEvent(new paciente_alergias_updated_domain_event_1.PacienteAlergiasUpdatedDomainEvent({
            aggregateId: this.id,
            alergias: this.props.alergias,
        }));
    }
    updateNotas(props) {
        this.props.notas = props.notas;
        this.addEvent(new paciente_notas_updated_domain_event_1.PacienteNotasUpdatedDomainEvent({
            aggregateId: this.id,
            notas: this.props.notas,
        }));
    }
    updateMedicacion(props) {
        this.props.medicacion = props.medicacion;
        this.addEvent(new paciente_medicacion_updated_domain_event_1.PacienteMedicacionUpdatedDomainEvent({
            aggregateId: this.id,
            medicacion: this.props.medicacion,
        }));
    }
    updatePatologias(props) {
        this.props.patologiasMedicas = props.patologiasMedicas;
        this.addEvent(new paciente_patologias_updated_domain_event_1.PacientePatologiasUpdatedDomainEvent({
            aggregateId: this.id,
            patologiasMedicas: this.props.patologiasMedicas,
        }));
    }
    updateEmbarazada(props) {
        if (this.props.sexo !== types_1.Sexo.MUJER) {
            throw new paciente_invalid_pregnancy_error_1.PacienteInvalidPregnancyError(undefined, {
                pacienteId: this.id,
            });
        }
        this.props.embarazada = props.embarazada;
        this.addEvent(new paciente_embarazada_updated_domain_event_1.PacienteEmbarazadaUpdatedDomainEvent({
            aggregateId: this.id,
            embarazada: this.props.embarazada,
        }));
    }
    updateHemorragias(props) {
        this.props.hemorragiasDentales = props.hemorragiasDentales;
        this.addEvent(new paciente_hemorragias_updated_domain_event_1.PacienteHemorragiasUpdatedDomainEvent({
            aggregateId: this.id,
            hemorragiasDentales: this.props.hemorragiasDentales,
        }));
    }
    validate() {
    }
}
exports.PacienteEntity = PacienteEntity;
//# sourceMappingURL=paciente.entity.js.map