import { ExceptionBase } from '@odoonto7/shared';

export class InvalidDienteNumberError extends ExceptionBase {
  static readonly message = 'Invalid diente number for dentadura type';

  public readonly code = 'ODONTOGRAMA.DIENTE.INVALID_NUMBER';

  constructor(cause?: Error, metadata?: unknown) {
    super(InvalidDienteNumberError.message, cause, metadata);
  }
} 
