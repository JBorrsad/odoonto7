import { ValueObject } from '@src/shared/ddd';
import { CaraDiente } from '../odontograma.types';
import { EstadoCara } from './estado-cara.value-object';
import { Lesion } from './lesion.value-object';
import { Tratamiento } from './tratamiento.value-object';

export interface DienteProps {
  numero: string;
  presente: boolean;
  caras: Map<CaraDiente, EstadoCara>;
}

export class Diente extends ValueObject<DienteProps> {
  constructor(props: DienteProps) {
    super(props);
  }

  protected validate(props: DienteProps): void {
    if (!props.numero) {
      throw new Error('Diente numero is required');
    }
    if (typeof props.presente !== 'boolean') {
      throw new Error('Presente must be a boolean');
    }
    if (!(props.caras instanceof Map)) {
      throw new Error('Caras must be a Map');
    }
  }

  get numero(): string {
    return this.props.numero;
  }

  get presente(): boolean {
    return this.props.presente;
  }

  get caras(): Map<CaraDiente, EstadoCara> {
    return this.props.caras;
  }

  static create(numero: string, presente = true): Diente {
    const caras = new Map<CaraDiente, EstadoCara>();

    const carasValidas = Diente.getCarasValidasParaDiente(numero);
    carasValidas.forEach((cara) => {
      caras.set(cara, EstadoCara.create());
    });

    return new Diente({
      numero,
      presente,
      caras,
    });
  }

  private static getCarasValidasParaDiente(numeroDiente: string): CaraDiente[] {
    const numero = numeroDiente.slice(-1);
    const esMaxilar = ['1', '2', '5', '6'].includes(numeroDiente.charAt(0));

    const carasComunes = [CaraDiente.MESIAL, CaraDiente.DISTAL];

    if (['1', '2'].includes(numero)) {
      return [
        CaraDiente.LABIAL,
        esMaxilar ? CaraDiente.PALATINO : CaraDiente.LINGUAL,
        ...carasComunes,
        CaraDiente.INCISAL,
      ];
    }

    if (numero === '3') {
      return [
        CaraDiente.VESTIBULAR,
        esMaxilar ? CaraDiente.PALATINO : CaraDiente.LINGUAL,
        ...carasComunes,
        CaraDiente.INCISAL,
      ];
    }

    if (['4', '5', '6', '7', '8'].includes(numero)) {
      return [
        CaraDiente.BUCAL,
        esMaxilar ? CaraDiente.PALATINO : CaraDiente.LINGUAL,
        ...carasComunes,
        CaraDiente.OCLUSAL,
      ];
    }

    return [
      CaraDiente.VESTIBULAR,
      CaraDiente.LINGUAL,
      CaraDiente.MESIAL,
      CaraDiente.DISTAL,
      CaraDiente.OCLUSAL,
    ];
  }

  agregarLesionEnCara(cara: CaraDiente, lesion: Lesion): Diente {
    if (!this.props.caras.has(cara)) {
      throw new Error(
        `Cara ${cara} no es válida para el diente ${this.props.numero}`,
      );
    }

    const nuevasCaras = new Map(this.props.caras);
    const estadoCara = nuevasCaras.get(cara);

    if (!estadoCara) {
      throw new Error(`Cara ${cara} not found`);
    }

    nuevasCaras.set(cara, estadoCara.agregarLesion(lesion));

    return new Diente({
      ...this.props,
      caras: nuevasCaras,
    });
  }

  agregarTratamientoEnCara(cara: CaraDiente, tratamiento: Tratamiento): Diente {
    if (!this.props.caras.has(cara)) {
      throw new Error(
        `Cara ${cara} no es válida para el diente ${this.props.numero}`,
      );
    }

    const nuevasCaras = new Map(this.props.caras);
    const estadoCara = nuevasCaras.get(cara);
    if (!estadoCara) {
      throw new Error(`Cara ${cara} not found`);
    }

    nuevasCaras.set(cara, estadoCara.agregarTratamiento(tratamiento));

    return new Diente({
      ...this.props,
      caras: nuevasCaras,
    });
  }

  marcarComoAusente(): Diente {
    return new Diente({
      ...this.props,
      presente: false,
    });
  }

  marcarComoPresente(): Diente {
    return new Diente({
      ...this.props,
      presente: true,
    });
  }

  getEstadoCara(cara: CaraDiente): EstadoCara | undefined {
    return this.props.caras.get(cara);
  }

  tieneLesiones(): boolean {
    return Array.from(this.props.caras.values()).some((estadoCara) =>
      estadoCara.tieneLesiones(),
    );
  }

  tieneTratamientos(): boolean {
    return Array.from(this.props.caras.values()).some((estadoCara) =>
      estadoCara.tieneTratamientos(),
    );
  }
}
