import { ExceptionBase } from '@odoonto7/shared';
export declare class PacienteInvalidPregnancyError extends ExceptionBase {
    static readonly message = "Solo las mujeres pueden estar embarazadas";
    readonly code = "PACIENTE.INVALID_PREGNANCY";
    constructor(cause?: Error, metadata?: unknown);
}
