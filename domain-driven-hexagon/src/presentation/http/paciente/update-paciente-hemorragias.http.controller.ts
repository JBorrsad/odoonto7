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
import { UpdatePacienteHemorragiasCommand } from '@src/application/paciente/commands/update-paciente-hemorragias/update-paciente-hemorragias.command';
import { UpdatePacienteHemorragiasRequestDto } from './commands/update-paciente-hemorragias.request.dto';
import { AggregateID } from '@src/shared/ddd';
import { NotFoundException } from '@src/shared/exceptions';
import { ApiErrorResponse } from '@src/shared/api/api-error.response';
import { IdResponse } from '@src/shared/api/id.response.dto';

@Controller(routesV1.version)
export class UpdatePacienteHemorragiasHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Update paciente hemorragias dentales' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: IdResponse,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: NotFoundException.message,
    type: ApiErrorResponse,
  })
  @Patch(`${routesV1.paciente.root}/:id/hemorragias`)
  async updateHemorragias(
    @Param('id') pacienteId: string,
    @Body() request: UpdatePacienteHemorragiasRequestDto,
  ): Promise<IdResponse> {
    const command = new UpdatePacienteHemorragiasCommand({
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