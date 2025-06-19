import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ExceptionBase } from '../../domain/exceptions';
export declare class ExceptionInterceptor implements NestInterceptor {
    private readonly logger;
    intercept(_context: ExecutionContext, next: CallHandler): Observable<ExceptionBase>;
}
