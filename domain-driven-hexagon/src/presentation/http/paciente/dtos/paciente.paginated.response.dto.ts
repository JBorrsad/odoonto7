import { ApiProperty } from '@nestjs/swagger';
import { PaginatedResponseDto } from '@src/shared/api/paginated.response.base';
import { PacienteResponseDto } from './paciente.response.dto';

export class PacientePaginatedResponseDto extends PaginatedResponseDto<PacienteResponseDto> {
  @ApiProperty({ type: PacienteResponseDto, isArray: true })
  readonly data: readonly PacienteResponseDto[];
}
