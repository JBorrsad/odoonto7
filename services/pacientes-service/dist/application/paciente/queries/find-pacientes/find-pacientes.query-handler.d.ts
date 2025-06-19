import { IQueryHandler } from '@nestjs/cqrs';
import { Result } from 'oxide.ts';
import { PaginatedParams, PaginatedQueryBase } from '@odoonto7/shared';
import { Paginated } from '@odoonto7/shared';
import { PacienteRepositoryPort } from '../../../infrastructure/paciente/paciente.repository.port';
import { PacienteEntity } from '../../../domain/paciente';
export declare class FindPacientesQuery extends PaginatedQueryBase {
    readonly country?: string;
    readonly postalCode?: string;
    readonly street?: string;
    readonly email?: string;
    readonly nombre?: string;
    readonly apellidos?: string;
    constructor(props: PaginatedParams<FindPacientesQuery>);
}
export declare class FindPacientesQueryHandler implements IQueryHandler<FindPacientesQuery> {
    private readonly repository;
    constructor(repository: PacienteRepositoryPort);
    execute(query: FindPacientesQuery): Promise<Result<Paginated<PacienteEntity>, Error>>;
}
