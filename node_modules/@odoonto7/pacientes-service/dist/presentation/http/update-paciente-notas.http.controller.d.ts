import { CommandBus } from '@nestjs/cqrs';
import { UpdatePacienteNotasRequestDto } from './commands/update-paciente-notas.request.dto';
import { IdResponse } from '@odoonto7/shared';
export declare class UpdatePacienteNotasHttpController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    updateNotas(pacienteId: string, request: UpdatePacienteNotasRequestDto): Promise<IdResponse>;
}
