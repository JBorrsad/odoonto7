import { ExceptionBase } from '@src/shared/exceptions';

export class PacienteAlreadyExistsError extends ExceptionBase {
  static readonly message = 'Paciente already exists';

  public readonly code = 'PACIENTE.ALREADY_EXISTS';

  constructor(cause?: Error, metadata?: unknown) {
    super(PacienteAlreadyExistsError.message, cause, metadata);
  }
}
