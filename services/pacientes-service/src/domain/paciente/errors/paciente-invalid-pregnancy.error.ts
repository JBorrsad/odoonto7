import { ExceptionBase } from '@odoonto7/shared';

export class PacienteInvalidPregnancyError extends ExceptionBase {
  static readonly message = 'Solo las mujeres pueden estar embarazadas';

  public readonly code = 'PACIENTE.INVALID_PREGNANCY';

  constructor(cause?: Error, metadata?: unknown) {
    super(PacienteInvalidPregnancyError.message, cause, metadata);
  }
}
