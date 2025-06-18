import { Body, Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { routesV1 } from '@src/config/app.routes';
import { QueryBus } from '@nestjs/cqrs';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Result } from 'oxide.ts';
import { FindPacientesRequestDto } from '@src/presentation/http/paciente/queries/find-pacientes.request.dto';
import { FindPacientesQuery } from '@src/application/paciente/queries/find-pacientes/find-pacientes.query-handler';
import { Paginated } from '@src/shared/ddd';
import { PacientePaginatedResponseDto } from '@src/presentation/http/paciente/dtos/paciente.paginated.response.dto';
import { PaginatedQueryRequestDto } from '@src/shared/api/paginated-query.request.dto';
import { PacienteModel } from '@src/infrastructure/database/paciente/paciente.repository';
import { ResponseBase } from '@src/shared/api/response.base';

@Controller(routesV1.version)
export class FindPacientesHttpController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(routesV1.paciente.root)
  @ApiOperation({ summary: 'Find pacientes' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: PacientePaginatedResponseDto,
  })
  async findPacientes(
    @Body() request: FindPacientesRequestDto,
    @Query() queryParams: PaginatedQueryRequestDto,
  ): Promise<PacientePaginatedResponseDto> {
    const query = new FindPacientesQuery({
      ...request,
      limit: queryParams?.limit,
      page: queryParams?.page,
    });
    const result: Result<
      Paginated<PacienteModel>,
      Error
    > = await this.queryBus.execute(query);

    const paginated = result.unwrap();

    return new PacientePaginatedResponseDto({
      ...paginated,
      data: paginated.data.map((paciente) => ({
        ...new ResponseBase(paciente),
        nombre: paciente.nombre,
        apellidos: paciente.apellidos,
        edad: paciente.edad,
        sexo: paciente.sexo,
        telefono: paciente.telefono,
        email: paciente.email,
        alergias: paciente.alergias,
        notas: paciente.notas,
        country: paciente.country,
        street: paciente.street,
        postalCode: paciente.postalCode,
      })),
    });
  }
}
