import { ExceptionBase } from '@src/shared/exceptions';

export class DienteNotFoundError extends ExceptionBase {
  static readonly message = 'Diente not found';

  public readonly code = 'ODONTOGRAMA.DIENTE.NOT_FOUND';

  constructor(cause?: Error, metadata?: unknown) {
    super(DienteNotFoundError.message, cause, metadata);
  }
} 