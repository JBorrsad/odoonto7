import { AggregateRoot, AggregateID } from '@src/shared/ddd';
import { PacienteCreatedDomainEvent } from '../events/paciente-created.domain-event';
import { PacienteAddressUpdatedDomainEvent } from '../events/paciente-address-updated.domain-event';
import { PacienteContactoUpdatedDomainEvent } from '../events/paciente-contacto-updated.domain-event';
import { PacienteDatosUpdatedDomainEvent } from '../events/paciente-datos-updated.domain-event';
import { PacienteAlergiasUpdatedDomainEvent } from '../events/paciente-alergias-updated.domain-event';
import { PacienteNotasUpdatedDomainEvent } from '../events/paciente-notas-updated.domain-event';
import { PacienteMedicacionUpdatedDomainEvent } from '../events/paciente-medicacion-updated.domain-event';
import { PacientePatologiasUpdatedDomainEvent } from '../events/paciente-patologias-updated.domain-event';
import { PacienteEmbarazadaUpdatedDomainEvent } from '../events/paciente-embarazada-updated.domain-event';
import { PacienteHemorragiasUpdatedDomainEvent } from '../events/paciente-hemorragias-updated.domain-event';
import { PacienteDeletedDomainEvent } from '../events/paciente-deleted.domain-event';
import { PacienteInvalidPregnancyError } from '../errors/paciente-invalid-pregnancy.error';
import { Address, AddressProps } from '../value-objects/address.value-object';
import {
  CreatePacienteProps,
  UpdatePacienteAddressProps,
  UpdatePacienteContactoProps,
  UpdatePacienteDatosProps,
  UpdatePacienteAlergiasProps,
  UpdatePacienteNotasProps,
  UpdatePacienteMedicacionProps,
  UpdatePacientePatologiasProps,
  UpdatePacienteEmbarazadaProps,
  UpdatePacienteHemorragiasProps,
  Sexo,
} from '../types';
import { randomUUID } from 'crypto';

export class PacienteEntity extends AggregateRoot<PacienteProps> {
  protected readonly _id: AggregateID;

  static create(create: CreatePacienteProps): PacienteEntity {
    const id = randomUUID();
    const props: PacienteProps = {
      ...create,
      embarazada: create.sexo === Sexo.MUJER ? create.embarazada : undefined,
    };
    const paciente = new PacienteEntity({ id, props });

    paciente.addEvent(
      new PacienteCreatedDomainEvent({
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
        ...props.address.unpack(),
      }),
    );
    return paciente;
  }

  get nombre(): string {
    return this.props.nombre;
  }

  get apellidos(): string {
    return this.props.apellidos;
  }

  get edad(): number {
    return this.props.edad;
  }

  get sexo(): Sexo {
    return this.props.sexo;
  }

  get telefono(): string {
    return this.props.telefono;
  }

  get email(): string {
    return this.props.email;
  }

  get alergias(): string {
    return this.props.alergias;
  }

  get notas(): string {
    return this.props.notas;
  }

  get medicacion(): string {
    return this.props.medicacion;
  }

  get patologiasMedicas(): string {
    return this.props.patologiasMedicas;
  }

  get embarazada(): boolean | undefined {
    return this.props.embarazada;
  }

  get hemorragiasDentales(): boolean {
    return this.props.hemorragiasDentales;
  }

  delete(): void {
    this.addEvent(
      new PacienteDeletedDomainEvent({
        aggregateId: this.id,
      }),
    );
  }

  updateAddress(props: UpdatePacienteAddressProps): void {
    const newAddress = new Address({
      ...this.props.address,
      ...props,
    } as AddressProps);

    this.props.address = newAddress;

    this.addEvent(
      new PacienteAddressUpdatedDomainEvent({
        aggregateId: this.id,
        country: newAddress.country,
        street: newAddress.street,
        postalCode: newAddress.postalCode,
      }),
    );
  }

  updateContacto(props: UpdatePacienteContactoProps): void {
    if (props.telefono !== undefined) {
      this.props.telefono = props.telefono;
    }
    if (props.email !== undefined) {
      this.props.email = props.email;
    }

    this.addEvent(
      new PacienteContactoUpdatedDomainEvent({
        aggregateId: this.id,
        telefono: this.props.telefono,
        email: this.props.email,
      }),
    );
  }

  updateDatos(props: UpdatePacienteDatosProps): void {
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
      if (props.sexo === Sexo.HOMBRE) {
        this.props.embarazada = undefined;
      }
    }

    this.addEvent(
      new PacienteDatosUpdatedDomainEvent({
        aggregateId: this.id,
        nombre: this.props.nombre,
        apellidos: this.props.apellidos,
        edad: this.props.edad,
        sexo: this.props.sexo,
      }),
    );
  }

  updateAlergias(props: UpdatePacienteAlergiasProps): void {
    this.props.alergias = props.alergias;

    this.addEvent(
      new PacienteAlergiasUpdatedDomainEvent({
        aggregateId: this.id,
        alergias: this.props.alergias,
      }),
    );
  }

  updateNotas(props: UpdatePacienteNotasProps): void {
    this.props.notas = props.notas;

    this.addEvent(
      new PacienteNotasUpdatedDomainEvent({
        aggregateId: this.id,
        notas: this.props.notas,
      }),
    );
  }

  updateMedicacion(props: UpdatePacienteMedicacionProps): void {
    this.props.medicacion = props.medicacion;

    this.addEvent(
      new PacienteMedicacionUpdatedDomainEvent({
        aggregateId: this.id,
        medicacion: this.props.medicacion,
      }),
    );
  }

  updatePatologias(props: UpdatePacientePatologiasProps): void {
    this.props.patologiasMedicas = props.patologiasMedicas;

    this.addEvent(
      new PacientePatologiasUpdatedDomainEvent({
        aggregateId: this.id,
        patologiasMedicas: this.props.patologiasMedicas,
      }),
    );
  }

  updateEmbarazada(props: UpdatePacienteEmbarazadaProps): void {
    // 🔍 1. Validar primero (excepción si algo está mal)
    if (this.props.sexo !== Sexo.MUJER) {
      throw new PacienteInvalidPregnancyError(undefined, {
        pacienteId: this.id,
      });
    }

    // ✅ 2. Cambiar el estado
    this.props.embarazada = props.embarazada;

    // 📢 3. Emitir el evento
    this.addEvent(
      new PacienteEmbarazadaUpdatedDomainEvent({
        aggregateId: this.id,
        embarazada: this.props.embarazada,
      }),
    );
  }

  updateHemorragias(props: UpdatePacienteHemorragiasProps): void {
    this.props.hemorragiasDentales = props.hemorragiasDentales;

    this.addEvent(
      new PacienteHemorragiasUpdatedDomainEvent({
        aggregateId: this.id,
        hemorragiasDentales: this.props.hemorragiasDentales,
      }),
    );
  }

  validate(): void {
    // Domain validations can be added here if needed
    // Business rule validations should be in specific methods
  }
}
