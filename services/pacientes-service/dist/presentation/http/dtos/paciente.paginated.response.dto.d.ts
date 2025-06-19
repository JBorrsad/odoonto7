import { PaginatedResponseDto } from '@odoonto7/shared';
import { PacienteResponseDto } from './paciente.response.dto';
export declare class PacientePaginatedResponseDto extends PaginatedResponseDto<PacienteResponseDto> {
    readonly data: readonly PacienteResponseDto[];
}
