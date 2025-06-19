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
import { UpdatePacientePatologiasCommand } from '@src/application/paciente/commands/update-paciente-patologias/update-paciente-patologias.command';
import { UpdatePacientePatologiasRequestDto } from './commands/update-paciente-patologias.request.dto';
import { AggregateID } from '@odoonto7/shared';
import { NotFoundException } from '@odoonto7/shared';
import { ApiErrorResponse } from '@odoonto7/shared';
import { IdResponse } from '@odoonto7/shared';

@Controller(routesV1.version)
export class UpdatePacientePatologiasHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Update paciente patologías médicas' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: IdResponse,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: NotFoundException.message,
    type: ApiErrorResponse,
  })
  @Patch(`${routesV1.paciente.root}/:id/patologias`)
  async updatePatologias(
    @Param('id') pacienteId: string,
    @Body() request: UpdatePacientePatologiasRequestDto,
  ): Promise<IdResponse> {
    const command = new UpdatePacientePatologiasCommand({
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
