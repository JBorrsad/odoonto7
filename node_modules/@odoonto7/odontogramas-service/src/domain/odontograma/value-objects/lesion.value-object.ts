import { ValueObject } from '@odoonto7/shared';
import { TipoLesion } from '../types';

export interface LesionProps {
  id: string;
  tipo: TipoLesion;
  descripcion?: string;
  fechaDeteccion: Date;
}

export class Lesion extends ValueObject<LesionProps> {
  constructor(props: LesionProps) {
    super(props);
  }

  protected validate(props: LesionProps): void {
    // Validaciones básicas
    if (!props.id) {
      throw new Error('Lesion ID is required');
    }
    if (!Object.values(TipoLesion).includes(props.tipo)) {
      throw new Error('Invalid lesion type');
    }
  }

  get id(): string {
    return this.props.id;
  }

  get tipo(): TipoLesion {
    return this.props.tipo;
  }

  get descripcion(): string | undefined {
    return this.props.descripcion;
  }

  get fechaDeteccion(): Date {
    return this.props.fechaDeteccion;
  }

  static create(props: Omit<LesionProps, 'id' | 'fechaDeteccion'>): Lesion {
    return new Lesion({
      ...props,
      id: crypto.randomUUID(),
      fechaDeteccion: new Date(),
    });
  }
}
