import { CommandBus } from '@nestjs/cqrs';
import { UpdatePacienteEmbarazadaRequestDto } from './commands/update-paciente-embarazada.request.dto';
import { IdResponse } from '@odoonto7/shared';
export declare class UpdatePacienteEmbarazadaHttpController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    updateEmbarazada(pacienteId: string, request: UpdatePacienteEmbarazadaRequestDto): Promise<IdResponse>;
}
