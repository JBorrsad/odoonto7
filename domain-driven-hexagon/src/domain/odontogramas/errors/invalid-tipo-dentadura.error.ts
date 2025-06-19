import { ExceptionBase } from '@src/shared/exceptions';

export class InvalidTipoDentaduraError extends ExceptionBase {
  static readonly message = 'Invalid tipo dentadura';

  public readonly code = 'ODONTOGRAMA.TIPO_DENTADURA.INVALID';

  constructor(cause?: Error, metadata?: unknown) {
    super(InvalidTipoDentaduraError.message, cause, metadata);
  }
} 