export interface SerializedException {
    message: string;
    code: string;
    correlationId: string;
    stack?: string;
    cause?: string;
    metadata?: unknown;
}
export declare abstract class ExceptionBase extends Error {
    readonly message: string;
    readonly cause?: Error | undefined;
    readonly metadata?: unknown;
    abstract code: string;
    readonly correlationId: string;
    constructor(message: string, cause?: Error | undefined, metadata?: unknown);
    toJSON(): SerializedException;
}
