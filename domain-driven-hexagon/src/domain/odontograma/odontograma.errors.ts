import { ExceptionBase } from '@src/shared/exceptions';

export class OdontogramaNotFoundError extends ExceptionBase {
  static readonly message = 'Odontograma not found';

  public readonly code = 'ODONTOGRAMA.NOT_FOUND';

  constructor(cause?: Error, metadata?: unknown) {
    super(OdontogramaNotFoundError.message, cause, metadata);
  }
}

export class OdontogramaAlreadyExistsError extends ExceptionBase {
  static readonly message = 'Odontograma already exists';

  public readonly code = 'ODONTOGRAMA.ALREADY_EXISTS';

  constructor(cause?: Error, metadata?: unknown) {
    super(OdontogramaAlreadyExistsError.message, cause, metadata);
  }
}

export class DienteNotFoundError extends ExceptionBase {
  static readonly message = 'Diente not found';

  public readonly code = 'ODONTOGRAMA.DIENTE.NOT_FOUND';

  constructor(cause?: Error, metadata?: unknown) {
    super(DienteNotFoundError.message, cause, metadata);
  }
}

export class InvalidDienteNumberError extends ExceptionBase {
  static readonly message = 'Invalid diente number for dentadura type';

  public readonly code = 'ODONTOGRAMA.DIENTE.INVALID_NUMBER';

  constructor(cause?: Error, metadata?: unknown) {
    super(InvalidDienteNumberError.message, cause, metadata);
  }
}

export class InvalidTipoDentaduraError extends ExceptionBase {
  static readonly message = 'Invalid tipo dentadura';

  public readonly code = 'ODONTOGRAMA.TIPO_DENTADURA.INVALID';

  constructor(cause?: Error, metadata?: unknown) {
    super(InvalidTipoDentaduraError.message, cause, metadata);
  }
}
