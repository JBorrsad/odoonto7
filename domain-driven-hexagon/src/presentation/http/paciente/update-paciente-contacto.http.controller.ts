import {
  Body,
  Controller,
  HttpStatus,
  NotFoundException as NotFoundHttpException,
  Param,
  Patch,
} from '@nestjs/common';
import { routesV1 } from '@src/config/app.routes';
import { CommandBus } from '@nestjs/cqrs';
import { match, Result } from 'oxide.ts';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdatePacienteContactoCommand } from '@src/application/paciente/commands/update-paciente-contacto/update-paciente-contacto.command';
import { UpdatePacienteContactoRequestDto } from '@src/presentation/http/paciente/commands/update-paciente-contacto.request.dto';
import { AggregateID } from '@src/shared/ddd';
import { NotFoundException } from '@src/shared/exceptions';
import { ApiErrorResponse } from '@src/shared/api/api-error.response';
import { IdResponse } from '@src/shared/api/id.response.dto';

@Controller(routesV1.version)
export class UpdatePacienteContactoHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Update paciente contacto' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: IdResponse,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: NotFoundException.message,
    type: ApiErrorResponse,
  })
  @Patch(`${routesV1.paciente.root}/:id/contacto`)
  async updateContacto(
    @Param('id') pacienteId: string,
    @Body() request: UpdatePacienteContactoRequestDto,
  ): Promise<IdResponse> {
    const command = new UpdatePacienteContactoCommand({
      pacienteId,
      ...request,
    });
    const result: Result<AggregateID, NotFoundException> =
      await this.commandBus.execute(command);

    return match(result, {
      Ok: (id: string) => new IdResponse(id),
      Err: (error: Error) => {
        if (error instanceof NotFoundException)
          throw new NotFoundHttpException(error.message);
        throw error;
      },
    });
  }
}
