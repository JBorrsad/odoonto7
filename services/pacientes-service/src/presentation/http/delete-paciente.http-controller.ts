import {
  Controller,
  Delete,
  HttpStatus,
  NotFoundException as NotFoundHttpException,
  Param,
} from '@nestjs/common';
import { routesV1 } from '@src/config/app.routes';
import { CommandBus } from '@nestjs/cqrs';
import { DeletePacienteCommand } from '@src/application/paciente/commands/delete-paciente/delete-paciente.command';
import { match, Result } from 'oxide.ts';
import { NotFoundException } from '@odoonto7/shared';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiErrorResponse } from '@odoonto7/shared';

@Controller(routesV1.version)
export class DeletePacienteHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Delete a paciente' })
  @ApiResponse({
    description: 'Paciente deleted',
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: NotFoundException.message,
    type: ApiErrorResponse,
  })
  @Delete(routesV1.paciente.delete)
  async deletePaciente(@Param('id') id: string): Promise<void> {
    const command = new DeletePacienteCommand({ pacienteId: id });
    const result: Result<boolean, NotFoundException> =
      await this.commandBus.execute(command);

    match(result, {
      Ok: (isOk: boolean) => isOk,
      Err: (error: Error) => {
        if (error instanceof NotFoundException)
          throw new NotFoundHttpException(error.message);
        throw error;
      },
    });
  }
}
