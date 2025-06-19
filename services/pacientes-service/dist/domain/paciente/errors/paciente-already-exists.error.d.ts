import { ExceptionBase } from '@odoonto7/shared';
export declare class PacienteAlreadyExistsError extends ExceptionBase {
    static readonly message = "Paciente already exists";
    readonly code = "PACIENTE.ALREADY_EXISTS";
    constructor(cause?: Error, metadata?: unknown);
}
