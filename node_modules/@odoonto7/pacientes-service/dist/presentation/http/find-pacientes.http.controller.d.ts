import { QueryBus } from '@nestjs/cqrs';
import { FindPacientesRequestDto } from './queries/find-pacientes.request.dto';
import { PacientePaginatedResponseDto } from './dtos/paciente.paginated.response.dto';
import { PaginatedQueryRequestDto } from '@odoonto7/shared';
import { PacienteMapper } from '../../infrastructure/paciente/paciente.mapper';
export declare class FindPacientesHttpController {
    private readonly queryBus;
    private readonly mapper;
    constructor(queryBus: QueryBus, mapper: PacienteMapper);
    findPacientes(request: FindPacientesRequestDto, queryParams: PaginatedQueryRequestDto): Promise<PacientePaginatedResponseDto>;
}
