import { ExceptionBase } from '@odoonto7/shared';

export class OdontogramaAlreadyExistsError extends ExceptionBase {
  static readonly message = 'Odontograma already exists';

  public readonly code = 'ODONTOGRAMA.ALREADY_EXISTS';

  constructor(cause?: Error, metadata?: unknown) {
    super(OdontogramaAlreadyExistsError.message, cause, metadata);
  }
} 
