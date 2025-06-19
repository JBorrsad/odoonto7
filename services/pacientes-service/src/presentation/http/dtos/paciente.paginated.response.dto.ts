import { ApiProperty } from '@nestjs/swagger';
import { PaginatedResponseDto } from '@odoonto7/shared';
import { PacienteResponseDto } from './paciente.response.dto';

export class PacientePaginatedResponseDto extends PaginatedResponseDto<PacienteResponseDto> {
  @ApiProperty({ type: PacienteResponseDto, isArray: true })
  readonly data: readonly PacienteResponseDto[];
}
