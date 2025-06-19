import { Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { Result } from 'oxide.ts';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PacienteResponseDto } from './dtos/paciente.response.dto';
import { FindPacienteByIdQuery } from '../../application/paciente/queries/find-paciente-by-id/find-paciente-by-id.query-handler';
import { PacienteEntity } from '../../domain/paciente';
import { NotFoundException } from '@odoonto7/shared';

@ApiTags('pacientes')
@Controller('pacientes')
export class FindPacienteByIdHttpController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(':id')
  @ApiOperation({ summary: 'Obtener paciente por ID' })
  @ApiResponse({
    status: 200,
    description: 'Paciente encontrado exitosamente',
    type: PacienteResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Paciente no encontrado',
  })
  async findPacienteById(@Param('id') id: string): Promise<PacienteResponseDto> {
    const query = new FindPacienteByIdQuery({ pacienteId: id });
    
    const result: Result<PacienteEntity, NotFoundException> = await this.queryBus.execute(query);

    if (result.isErr()) {
      throw result.unwrapErr();
    }

    const paciente = result.unwrap();
    
    return new PacienteResponseDto(paciente);
  }
} 