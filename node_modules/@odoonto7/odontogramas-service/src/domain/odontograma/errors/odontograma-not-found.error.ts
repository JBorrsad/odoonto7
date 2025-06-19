import { ExceptionBase } from '@odoonto7/shared';

export class OdontogramaNotFoundError extends ExceptionBase {
  static readonly message = 'Odontograma not found';

  public readonly code = 'ODONTOGRAMA.NOT_FOUND';

  constructor(cause?: Error, metadata?: unknown) {
    super(OdontogramaNotFoundError.message, cause, metadata);
  }
} 
