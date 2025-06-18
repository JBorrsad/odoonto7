import { ValueObject } from '@src/shared/ddd';
import { Lesion } from './lesion.value-object';
import { Tratamiento } from './tratamiento.value-object';

export interface EstadoCaraProps {
  lesiones: Lesion[];
  tratamientos: Tratamiento[];
}

export class EstadoCara extends ValueObject<EstadoCaraProps> {
  constructor(props: EstadoCaraProps) {
    super(props);
  }

  protected validate(props: EstadoCaraProps): void {
    if (!Array.isArray(props.lesiones)) {
      throw new Error('Lesiones must be an array');
    }
    if (!Array.isArray(props.tratamientos)) {
      throw new Error('Tratamientos must be an array');
    }
  }

  get lesiones(): Lesion[] {
    return this.props.lesiones;
  }

  get tratamientos(): Tratamiento[] {
    return this.props.tratamientos;
  }

  static create(): EstadoCara {
    return new EstadoCara({
      lesiones: [],
      tratamientos: [],
    });
  }

  agregarLesion(lesion: Lesion): EstadoCara {
    return new EstadoCara({
      ...this.props,
      lesiones: [...this.props.lesiones, lesion],
    });
  }

  agregarTratamiento(tratamiento: Tratamiento): EstadoCara {
    return new EstadoCara({
      ...this.props,
      tratamientos: [...this.props.tratamientos, tratamiento],
    });
  }

  eliminarLesion(lesionId: string): EstadoCara {
    return new EstadoCara({
      ...this.props,
      lesiones: this.props.lesiones.filter((lesion) => lesion.id !== lesionId),
    });
  }

  eliminarTratamiento(tratamientoId: string): EstadoCara {
    return new EstadoCara({
      ...this.props,
      tratamientos: this.props.tratamientos.filter(
        (tratamiento) => tratamiento.id !== tratamientoId,
      ),
    });
  }

  tieneLesiones(): boolean {
    return this.props.lesiones.length > 0;
  }

  tieneTratamientos(): boolean {
    return this.props.tratamientos.length > 0;
  }
}
