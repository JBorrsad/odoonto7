import { ValueObject } from '@odoonto7/shared';
import { TipoTratamiento } from '../types';

export interface TratamientoProps {
  id: string;
  tipo: TipoTratamiento;
  descripcion?: string;
  fechaRealizacion: Date;
  completado: boolean;
}

export class Tratamiento extends ValueObject<TratamientoProps> {
  constructor(props: TratamientoProps) {
    super(props);
  }

  protected validate(props: TratamientoProps): void {
    if (!props.id) {
      throw new Error('Tratamiento ID is required');
    }
    if (!Object.values(TipoTratamiento).includes(props.tipo)) {
      throw new Error('Invalid tratamiento type');
    }
  }

  get id(): string {
    return this.props.id;
  }

  get tipo(): TipoTratamiento {
    return this.props.tipo;
  }

  get descripcion(): string | undefined {
    return this.props.descripcion;
  }

  get fechaRealizacion(): Date {
    return this.props.fechaRealizacion;
  }

  get completado(): boolean {
    return this.props.completado;
  }

  static create(
    props: Omit<TratamientoProps, 'id' | 'fechaRealizacion' | 'completado'>,
  ): Tratamiento {
    return new Tratamiento({
      ...props,
      id: crypto.randomUUID(),
      fechaRealizacion: new Date(),
      completado: false,
    });
  }

  marcarCompletado(): Tratamiento {
    return new Tratamiento({
      ...this.props,
      completado: true,
    });
  }
}
