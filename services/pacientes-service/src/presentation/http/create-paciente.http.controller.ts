import {
  Body,
  ConflictException as ConflictHttpException,
  Controller,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { routesV1 } from '@src/config/app.routes';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CommandBus } from '@nestjs/cqrs';
import { match, Result } from 'oxide.ts';
import { CreatePacienteCommand } from '@src/application/paciente/commands/create-paciente/create-paciente.command';
import { CreatePacienteRequestDto } from '@src/presentation/http/paciente/commands/create-paciente.request.dto';
import { PacienteAlreadyExistsError } from '@src/domain/pacientes';
import { IdResponse } from '@odoonto7/shared';
import { AggregateID } from '@odoonto7/shared';
import { ApiErrorResponse } from '@odoonto7/shared';

@Controller(routesV1.version)
export class CreatePacienteHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Create a patient' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: IdResponse,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: PacienteAlreadyExistsError.message,
    type: ApiErrorResponse,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ApiErrorResponse,
  })
  @Post(routesV1.paciente.root)
  async create(@Body() body: CreatePacienteRequestDto): Promise<IdResponse> {
    const command = new CreatePacienteCommand(body);

    const result: Result<AggregateID, PacienteAlreadyExistsError> =
      await this.commandBus.execute(command);

    return match(result, {
      Ok: (id: string) => new IdResponse(id),
      Err: (error: Error) => {
        if (error instanceof PacienteAlreadyExistsError)
          throw new ConflictHttpException(error.message);
        throw error;
      },
    });
  }
}
