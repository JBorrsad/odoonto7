import { CommandBus } from '@nestjs/cqrs';
import { UpdatePacientePatologiasRequestDto } from './commands/update-paciente-patologias.request.dto';
import { IdResponse } from '@odoonto7/shared';
export declare class UpdatePacientePatologiasHttpController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    updatePatologias(pacienteId: string, request: UpdatePacientePatologiasRequestDto): Promise<IdResponse>;
}
