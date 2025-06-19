
import { AggregateRoot, CreateEntityProps } from '@odoonto7/shared';
import { TipoDentadura, CaraDiente, TipoLesion, TipoTratamiento, TipoDiente, CreateOdontogramaProps } from '../types';
import { Diente } from '../value-objects/diente.value-object';

export interface OdontogramaProps {
  tipoDentadura: TipoDentadura;
  dientes: Map<string, Diente>;
}
import { Lesion } from '../value-objects/lesion.value-object';
import { Tratamiento } from '../value-objects/tratamiento.value-object';
import { OdontogramaCreatedDomainEvent } from '../events/odontograma-created.domain-event';
import { TipoDentaduraCambiadoDomainEvent } from '../events/tipo-dentadura-cambiado.domain-event';
import { LesionAgregadaDomainEvent } from '../events/lesion-agregada.domain-event';
import { TratamientoAgregadoDomainEvent } from '../events/tratamiento-agregado.domain-event';
import { InvalidDienteNumberError } from '../errors/invalid-diente-number.error';
import { InvalidTipoDentaduraError } from '../errors/invalid-tipo-dentadura.error';

export class OdontogramaEntity extends AggregateRoot<OdontogramaProps> {
  protected _id: string;

  constructor(create: CreateEntityProps<OdontogramaProps>) {
    super(create);
    this._id = create.id;
  }

  validate(): void {
    if (!this.props.tipoDentadura) {
      throw new InvalidTipoDentaduraError();
    }
    if (!this.props.dientes || this.props.dientes.size === 0) {
      throw new Error('Odontograma debe tener al menos un diente');
    }
  }

  static create(props: CreateOdontogramaProps): OdontogramaEntity {
    const now = new Date();
    const dientes = OdontogramaEntity.generarDientesSegunTipo(props.tipoDentadura);
    
    const odontograma = new OdontogramaEntity({
      id: props.id,
      props: {
        tipoDentadura: props.tipoDentadura,
        dientes,
      },
      createdAt: now,
      updatedAt: now,
    });

    odontograma.addEvent(
      new OdontogramaCreatedDomainEvent({
        aggregateId: props.id,
        tipoDentadura: props.tipoDentadura,
      }),
    );

    return odontograma;
  }

  get tipoDentadura(): TipoDentadura {
    return this.props.tipoDentadura;
  }

  get dientes(): Map<string, Diente> {
    return this.props.dientes;
  }

  cambiarTipoDentadura(nuevoTipo: TipoDentadura): void {
    if (!Object.values(TipoDentadura).includes(nuevoTipo)) {
      throw new InvalidTipoDentaduraError();
    }

    const tipoAnterior = this.props.tipoDentadura;
    this.props.tipoDentadura = nuevoTipo;

    this.migrarDientesANuevoTipo(tipoAnterior, nuevoTipo);

    this.addEvent(
      new TipoDentaduraCambiadoDomainEvent({
        aggregateId: this.id,
        tipoAnterior,
        tipoNuevo: nuevoTipo,
      }),
    );
  }

  agregarLesion(
    numeroDiente: string,
    cara: CaraDiente,
    tipo: TipoLesion,
    descripcion?: string,
  ): void {
    this.validarNumeroDiente(numeroDiente);
    
    const diente = this.props.dientes.get(numeroDiente);
    if (!diente) {
      throw new InvalidDienteNumberError();
    }

    const lesion = Lesion.create({ tipo, descripcion });
    const dienteActualizado = diente.agregarLesionEnCara(cara, lesion);
    
    this.props.dientes.set(numeroDiente, dienteActualizado);

    this.addEvent(
      new LesionAgregadaDomainEvent({
        aggregateId: this.id,
        numeroDiente,
        cara,
        lesionId: lesion.id,
        tipo,
      }),
    );
  }

  agregarTratamiento(
    numeroDiente: string,
    cara: CaraDiente,
    tipo: TipoTratamiento,
    descripcion?: string,
  ): void {
    this.validarNumeroDiente(numeroDiente);
    
    const diente = this.props.dientes.get(numeroDiente);
    if (!diente) {
      throw new InvalidDienteNumberError();
    }

    const tratamiento = Tratamiento.create({ tipo, descripcion });
    const dienteActualizado = diente.agregarTratamientoEnCara(cara, tratamiento);
    
    this.props.dientes.set(numeroDiente, dienteActualizado);

    this.addEvent(
      new TratamientoAgregadoDomainEvent({
        aggregateId: this.id,
        numeroDiente,
        cara,
        tratamientoId: tratamiento.id,
        tipo,
      }),
    );
  }

  marcarDienteComoAusente(numeroDiente: string): void {
    this.validarNumeroDiente(numeroDiente);
    
    const diente = this.props.dientes.get(numeroDiente);
    if (!diente) {
      throw new InvalidDienteNumberError();
    }

    const dienteActualizado = diente.marcarComoAusente();
    this.props.dientes.set(numeroDiente, dienteActualizado);
  }

  getDiente(numeroDiente: string): Diente | undefined {
    return this.props.dientes.get(numeroDiente);
  }

  private static generarDientesSegunTipo(tipo: TipoDentadura): Map<string, Diente> {
    const dientes = new Map<string, Diente>();
    const numerosDientes = OdontogramaEntity.getNumerosDientesSegunTipo(tipo);

    numerosDientes.forEach(numero => {
      dientes.set(numero, Diente.create(numero));
    });

    return dientes;
  }

  private static getNumerosDientesSegunTipo(tipo: TipoDentadura): string[] {
    switch (tipo) {
      case TipoDentadura.TEMPORAL:
        return [
          '55', '54', '53', '52', '51', '61', '62', '63', '64', '65',
          '75', '74', '73', '72', '71', '81', '82', '83', '84', '85',
        ];
      case TipoDentadura.DEFINITIVA:
        return [
          '18', '17', '16', '15', '14', '13', '12', '11', '21', '22', '23', '24', '25', '26', '27', '28',
          '38', '37', '36', '35', '34', '33', '32', '31', '41', '42', '43', '44', '45', '46', '47', '48',
        ];
      case TipoDentadura.MIXTA_PRIMERA:
        return [
          '16', '11', '21', '26',
          '36', '31', '41', '46',
          '55', '54', '53', '52', '51', '61', '62', '63', '64', '65',
          '75', '74', '73', '72', '71', '81', '82', '83', '84', '85',
        ];
      case TipoDentadura.MIXTA_SEGUNDA:
        return [
          '16', '15', '14', '13', '12', '11', '21', '22', '23', '24', '25', '26',
          '36', '35', '34', '33', '32', '31', '41', '42', '43', '44', '45', '46',
          '55', '54', '53', '52', '51', '61', '62', '63', '64', '65',
          '75', '74', '73', '72', '71', '81', '82', '83', '84', '85',
        ];
      default:
        throw new InvalidTipoDentaduraError();
    }
  }

  static getTipoDiente(numeroDiente: string): TipoDiente {
    const numero = numeroDiente.slice(-1);
    
    if (['1', '2'].includes(numero)) {
      return TipoDiente.INCISIVO;
    }
    if (numero === '3') {
      return TipoDiente.CANINO;
    }
    if (['4', '5'].includes(numero)) {
      return TipoDiente.PREMOLAR;
    }
    if (['6', '7', '8'].includes(numero)) {
      return TipoDiente.MOLAR;
    }
    
    throw new InvalidDienteNumberError();
  }

  static getCarasValidasParaDiente(numeroDiente: string): CaraDiente[] {
    const tipoDiente = OdontogramaEntity.getTipoDiente(numeroDiente);
    const esMaxilar = ['1', '2', '5', '6'].includes(numeroDiente.charAt(0));
    
    const carasComunes = [CaraDiente.MESIAL, CaraDiente.DISTAL];
    
    switch (tipoDiente) {
      case TipoDiente.INCISIVO:
        return [
          CaraDiente.LABIAL,
          esMaxilar ? CaraDiente.PALATINO : CaraDiente.LINGUAL,
          ...carasComunes,
          CaraDiente.INCISAL,
        ];
      case TipoDiente.CANINO:
        return [
          CaraDiente.VESTIBULAR,
          esMaxilar ? CaraDiente.PALATINO : CaraDiente.LINGUAL,
          ...carasComunes,
          CaraDiente.INCISAL,
        ];
      case TipoDiente.PREMOLAR:
      case TipoDiente.MOLAR:
        return [
          CaraDiente.BUCAL,
          esMaxilar ? CaraDiente.PALATINO : CaraDiente.LINGUAL,
          ...carasComunes,
          CaraDiente.OCLUSAL,
        ];
      default:
        throw new InvalidDienteNumberError();
    }
  }

  private validarNumeroDiente(numeroDiente: string): void {
    const numerosValidos = OdontogramaEntity.getNumerosDientesSegunTipo(this.props.tipoDentadura);
    if (!numerosValidos.includes(numeroDiente)) {
      throw new InvalidDienteNumberError();
    }
  }

  private migrarDientesANuevoTipo(tipoAnterior: TipoDentadura, tipoNuevo: TipoDentadura): void {
    const nuevosNumeros = OdontogramaEntity.getNumerosDientesSegunTipo(tipoNuevo);
    const dientesAnteriores = new Map(this.props.dientes);
    
    this.props.dientes.clear();

    nuevosNumeros.forEach(numero => {
      const dienteExistente = dientesAnteriores.get(numero);
      if (dienteExistente) {
        this.props.dientes.set(numero, dienteExistente);
      } else {
        this.props.dientes.set(numero, Diente.create(numero));
      }
    });
  }
} 
